import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../config/database';
import { AppError } from '../utils/error-handler';
import { logger } from '../utils/logger';
import {
  SemanticDocument,
  SemanticRelationship,
  SearchResults,
  SearchResult,
  RelatedEntities,
  IndexEntityRequest,
  SemanticSearchRequest,
} from '../types';

export class VoxIntegrationService {
  private get voxApiUrl(): string {
    const url = process.env['VOX_API_URL'];
    if (!url) {
      throw new AppError('INTERNAL_ERROR', 'VOX_API_URL environment variable is not configured');
    }
    return url;
  }

  /**
   * Index an entity: send to Vox API and persist to semantic_documents table.
   */
  async indexEntity(
    tenantId: string,
    request: IndexEntityRequest
  ): Promise<SemanticDocument> {
    const { entity_type, entity_id, title, content, metadata = {} } = request;

    const now = new Date().toISOString();

    // Call Vox API to generate embedding / index
    let embedding: number[] | undefined;
    try {
      const response = await axios.post(
        `${this.voxApiUrl}/index`,
        { tenant_id: tenantId, entity_type, entity_id, title, content, metadata },
        { timeout: 30_000, headers: { 'Content-Type': 'application/json' } }
      );
      embedding = (response.data as { embedding?: number[] }).embedding;
    } catch (err) {
      logger.warn({ err, tenantId, entity_type, entity_id }, 'Vox API indexing failed, storing without embedding');
    }

    // Upsert into semantic_documents table
    const doc: SemanticDocument = {
      id: uuidv4(),
      tenant_id: tenantId,
      entity_type,
      entity_id,
      title,
      content,
      embedding,
      metadata,
      indexed_at: now,
      updated_at: now,
    };

    const { data: existing } = await supabase
      .from('semantic_documents')
      .select('id')
      .eq('tenant_id', tenantId)
      .eq('entity_type', entity_type)
      .eq('entity_id', entity_id)
      .single();

    if (existing) {
      const { data, error } = await supabase
        .from('semantic_documents')
        .update({ title, content, embedding, metadata, updated_at: now, indexed_at: now })
        .eq('tenant_id', tenantId)
        .eq('entity_type', entity_type)
        .eq('entity_id', entity_id)
        .select()
        .single();

      if (error || !data) {
        logger.error({ err: error, tenantId, entity_id }, 'Failed to update semantic document');
        throw new AppError('INTERNAL_ERROR', 'Failed to index entity', error?.message);
      }

      logger.info({ tenantId, entity_type, entity_id }, 'Entity re-indexed');
      return data as SemanticDocument;
    }

    const { data, error } = await supabase
      .from('semantic_documents')
      .insert(doc)
      .select()
      .single();

    if (error || !data) {
      logger.error({ err: error, tenantId, entity_id }, 'Failed to insert semantic document');
      throw new AppError('INTERNAL_ERROR', 'Failed to index entity', error?.message);
    }

    logger.info({ tenantId, entity_type, entity_id }, 'Entity indexed');
    return data as SemanticDocument;
  }

  /**
   * Perform semantic search via Vox API.
   */
  async semanticSearch(
    tenantId: string,
    request: SemanticSearchRequest
  ): Promise<SearchResults> {
    const { query, limit = 10, entity_type, filters = {} } = request;
    const startedAt = Date.now();

    let voxResults: SearchResult[] = [];

    try {
      const response = await axios.post(
        `${this.voxApiUrl}/search`,
        { tenant_id: tenantId, query, limit, entity_type, filters },
        { timeout: 30_000, headers: { 'Content-Type': 'application/json' } }
      );

      const voxData = response.data as { results?: Array<{ document: SemanticDocument; score: number }> };
      voxResults = (voxData.results ?? []) as SearchResult[];
    } catch (err) {
      logger.warn({ err, tenantId, query }, 'Vox API search failed, falling back to local search');

      // Fallback: basic text search in local DB
      let dbQuery = supabase
        .from('semantic_documents')
        .select('*')
        .eq('tenant_id', tenantId)
        .ilike('content', `%${query}%`)
        .limit(limit);

      if (entity_type) {
        dbQuery = dbQuery.eq('entity_type', entity_type);
      }

      const { data: docs } = await dbQuery;

      voxResults = ((docs ?? []) as SemanticDocument[]).map((doc) => ({
        document: doc,
        score: 0.5, // Fallback score
      }));
    }

    const durationMs = Date.now() - startedAt;

    return {
      results: voxResults,
      total: voxResults.length,
      query,
      duration_ms: durationMs,
    };
  }

  /**
   * Get related entities via Vox API + check semantic_relationships table.
   */
  async getRelatedEntities(
    tenantId: string,
    entityId: string,
    limit = 10
  ): Promise<RelatedEntities> {
    let voxRelated: Array<{ entity: SemanticDocument; relationship_type: string; score: number }> = [];

    try {
      const response = await axios.get(
        `${this.voxApiUrl}/related/${entityId}`,
        {
          params: { tenant_id: tenantId, limit },
          timeout: 30_000,
        }
      );

      const voxData = response.data as {
        related?: Array<{ entity: SemanticDocument; relationship_type: string; score: number }>;
      };
      voxRelated = voxData.related ?? [];
    } catch (err) {
      logger.warn({ err, tenantId, entityId }, 'Vox API related entities failed, using local relationships');
    }

    // Also check semantic_relationships table
    const { data: relationships } = await supabase
      .from('semantic_relationships')
      .select('*')
      .eq('tenant_id', tenantId)
      .eq('source_entity_id', entityId)
      .order('score', { ascending: false })
      .limit(limit);

    if (relationships && relationships.length > 0) {
      const relatedEntityIds = (relationships as SemanticRelationship[]).map((r) => r.target_entity_id);

      const { data: relatedDocs } = await supabase
        .from('semantic_documents')
        .select('*')
        .eq('tenant_id', tenantId)
        .in('entity_id', relatedEntityIds);

      const docMap = new Map<string, SemanticDocument>(
        ((relatedDocs ?? []) as SemanticDocument[]).map((d) => [d.entity_id, d])
      );

      for (const rel of relationships as SemanticRelationship[]) {
        const doc = docMap.get(rel.target_entity_id);
        if (doc && !voxRelated.find((r) => r.entity.entity_id === rel.target_entity_id)) {
          voxRelated.push({ entity: doc, relationship_type: rel.relationship_type, score: rel.score });
        }
      }
    }

    // Sort by score desc and limit
    voxRelated.sort((a, b) => b.score - a.score);
    const limited = voxRelated.slice(0, limit);

    return {
      entity_id: entityId,
      related: limited,
    };
  }
}

export const voxIntegrationService = new VoxIntegrationService();
