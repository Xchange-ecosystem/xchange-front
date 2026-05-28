export interface SemanticDocument {
  id: string;
  tenant_id: string;
  entity_type: string;
  entity_id: string;
  title: string;
  content: string;
  embedding?: number[];
  metadata: Record<string, unknown>;
  indexed_at: string;
  updated_at: string;
}

export interface SemanticRelationship {
  id: string;
  tenant_id: string;
  source_entity_id: string;
  target_entity_id: string;
  relationship_type: string;
  score: number;
  created_at: string;
}

export interface SearchResult {
  document: SemanticDocument;
  score: number;
}

export interface SearchResults {
  results: SearchResult[];
  total: number;
  query: string;
  duration_ms: number;
}

export interface RelatedEntities {
  entity_id: string;
  related: Array<{
    entity: SemanticDocument;
    relationship_type: string;
    score: number;
  }>;
}

export interface IndexEntityRequest {
  entity_type: string;
  entity_id: string;
  title: string;
  content: string;
  metadata?: Record<string, unknown>;
}

export interface SemanticSearchRequest {
  query: string;
  limit?: number;
  entity_type?: string;
  filters?: Record<string, unknown>;
}

export interface EntitySchema {
  id: string;
  tenant_id: string;
  entity_type: string;
  schema: Record<string, unknown>;
  version: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
