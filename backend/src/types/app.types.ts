export interface App {
  id: string;
  name: string;
  description: string;
  version: string;
  vendor: string;
  category: string;
  capabilities: string[];
  config_schema: Record<string, unknown>;
  webhook_events: string[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface AppInstallation {
  id: string;
  tenant_id: string;
  app_id: string;
  installed_by: string;
  config: Record<string, unknown>;
  status: 'active' | 'inactive' | 'error';
  installed_at: string;
  updated_at: string;
}

export interface InstallAppRequest {
  config: Record<string, unknown>;
}
