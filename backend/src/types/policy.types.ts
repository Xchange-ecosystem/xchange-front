export interface Policy {
  id: string;
  tenant_id: string;
  name: string;
  description: string;
  effect: 'allow' | 'deny';
  subjects: string[];
  capability_ids: string[];
  actions: string[];
  conditions: PolicyCondition[];
  priority: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface PolicyCondition {
  field: string;
  operator: 'eq' | 'neq' | 'in' | 'nin' | 'gt' | 'lt' | 'contains';
  value: unknown;
}

export interface PolicyEvaluation {
  id: string;
  tenant_id: string;
  user_id: string;
  capability_id: string;
  action: string;
  decision: 'allow' | 'deny';
  matched_policy_id: string | null;
  evaluated_at: string;
}

export interface PolicyDecision {
  decision: 'allow' | 'deny';
  reason: string;
  matched_policy: Policy | null;
  evaluated_at: string;
}

export interface CreatePolicyRequest {
  name: string;
  description: string;
  effect: 'allow' | 'deny';
  subjects: string[];
  capability_ids: string[];
  actions: string[];
  conditions?: PolicyCondition[];
  priority?: number;
}

export interface EvaluatePolicyRequest {
  user_id: string;
  capability_id: string;
  action: string;
}

export interface PolicyFilters {
  effect?: 'allow' | 'deny';
  is_active?: boolean;
  capability_id?: string;
}
