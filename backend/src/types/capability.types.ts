export interface Capability {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  category: string;
  version: string;
  input_schema: Record<string, unknown>;
  output_schema: Record<string, unknown>;
  handler_type: 'function' | 'webhook' | 'workflow';
  handler_config: Record<string, unknown>;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface CapabilityVisibility {
  id: string;
  capability_id: string;
  tenant_id: string;
  visible_to_tenant_id: string;
  created_at: string;
}

export interface ExecuteCapabilityRequest {
  input: Record<string, unknown>;
}

export interface ExecuteCapabilityResponse {
  capability_id: string;
  execution_id: string;
  status: 'success' | 'error';
  output: unknown;
  duration_ms: number;
  executed_at: string;
}
