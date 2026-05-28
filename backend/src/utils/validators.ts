import Ajv, { JSONSchemaType, AnySchema } from 'ajv';

const ajv = new Ajv({ allErrors: true, coerceTypes: false });

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const MAX_STRING_LENGTH = 10_000;

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validate data against a JSON schema using Ajv.
 */
export function validateSchema(
  schema: AnySchema,
  data: unknown
): ValidationResult {
  const validate = ajv.compile(schema);
  const valid = validate(data) as boolean;

  if (valid) {
    return { valid: true, errors: [] };
  }

  const errors = (validate.errors ?? []).map((e) => {
    const field = e.instancePath ? e.instancePath.replace(/^\//, '') : 'root';
    return `${field}: ${e.message ?? 'invalid'}`;
  });

  return { valid: false, errors };
}

/**
 * Validate that a string is a valid UUID v1-v5.
 */
export function validateUUID(id: string): boolean {
  return UUID_REGEX.test(id);
}

/**
 * Parse and validate pagination query parameters.
 * Defaults: page=1, limit=20. Max limit: 100.
 */
export function validatePaginationParams(query: Record<string, unknown>): {
  page: number;
  limit: number;
} {
  let page = parseInt(String(query['page'] ?? '1'), 10);
  let limit = parseInt(String(query['limit'] ?? '20'), 10);

  if (!Number.isFinite(page) || page < 1) {
    page = 1;
  }

  if (!Number.isFinite(limit) || limit < 1) {
    limit = 20;
  }

  if (limit > 100) {
    limit = 100;
  }

  return { page, limit };
}

/**
 * Trim a string and limit its length.
 */
export function sanitizeString(
  str: string,
  maxLength = MAX_STRING_LENGTH
): string {
  return str.trim().slice(0, maxLength);
}
