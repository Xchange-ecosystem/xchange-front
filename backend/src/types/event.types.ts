export interface Event {
  id: string;
  tenant_id: string;
  event_type: string;
  aggregate_type: string;
  aggregate_id: string;
  data: Record<string, unknown>;
  actor_id: string;
  created_at: string;
}

export interface EventSubscriber {
  id: string;
  tenant_id: string;
  event_type: string;
  app_id: string;
  webhook_url: string;
  is_active: boolean;
  retry_count: number;
  created_at: string;
  updated_at: string;
}

export interface PublishEventRequest {
  event_type: string;
  aggregate_type: string;
  aggregate_id: string;
  data: Record<string, unknown>;
}

export interface SubscribeEventRequest {
  event_type: string;
  app_id: string;
  webhook_url: string;
}

export interface EventHistoryFilters {
  event_type?: string;
  aggregate_type?: string;
  aggregate_id?: string;
  from?: string;
  to?: string;
  limit?: number;
}
