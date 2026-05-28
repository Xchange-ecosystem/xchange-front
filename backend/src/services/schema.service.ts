import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../config/database';
import { AppError } from '../utils/error-handler';
import { validateSchema, ValidationResult } from '../utils/validators';
import { logger } from '../utils/logger';
import { EntitySchema } from '../types';

export class SchemaService {
  async getSchema(tenantId: string, entityType: string): Promise<EntitySchema> {
    const { data, error } = await supabase
      .from('entity_schemas')
      .select('*')
      .eq('tenant_id', tenantId)
      .eq('entity_type', entityType)
      .eq('is_active', true)
      .single();

    if (error || !data) {
      throw new AppError('NOT_FOUND', `Schema for entity type '${entityType}' not found`);
    }

    return data as EntitySchema;
  }

  async validateData(
    tenantId: string,
    entityType: string,
    data: unknown
  ): Promise<ValidationResult> {
    const entitySchema = await this.getSchema(tenantId, entityType);
    return validateSchema(entitySchema.schema, data);
  }

  async listSchemas(tenantId: string): Promise<EntitySchema[]> {
    const { data, error } = await supabase
      .from('entity_schemas')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('entity_type');

    if (error) {
      logger.error({ err: error, tenantId }, 'Failed to fetch schemas');
      throw new AppError('INTERNAL_ERROR', 'Failed to fetch schemas', error.message);
    }

    return (data ?? []) as EntitySchema[];
  }

  async upsertSchema(
    tenantId: string,
    entityType: string,
    schema: Record<string, unknown>,
    version: string
  ): Promise<EntitySchema> {
    const now = new Date().toISOString();

    // Check if schema exists for this tenant+entityType
    const { data: existing } = await supabase
      .from('entity_schemas')
      .select('id')
      .eq('tenant_id', tenantId)
      .eq('entity_type', entityType)
      .single();

    if (existing) {
      const { data, error } = await supabase
        .from('entity_schemas')
        .update({ schema, version, is_active: true, updated_at: now })
        .eq('tenant_id', tenantId)
        .eq('entity_type', entityType)
        .select()
        .single();

      if (error || !data) {
        logger.error({ err: error, tenantId, entityType }, 'Failed to update schema');
        throw new AppError('INTERNAL_ERROR', 'Failed to update schema', error?.message);
      }

      logger.info({ tenantId, entityType, version }, 'Schema updated');
      return data as EntitySchema;
    }

    const newSchema: EntitySchema = {
      id: uuidv4(),
      tenant_id: tenantId,
      entity_type: entityType,
      schema,
      version,
      is_active: true,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from('entity_schemas')
      .insert(newSchema)
      .select()
      .single();

    if (error || !data) {
      logger.error({ err: error, tenantId, entityType }, 'Failed to create schema');
      throw new AppError('INTERNAL_ERROR', 'Failed to create schema', error?.message);
    }

    logger.info({ tenantId, entityType, version }, 'Schema created');
    return data as EntitySchema;
  }
}

export const schemaService = new SchemaService();
