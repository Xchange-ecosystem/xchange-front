import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../config/database';
import { AppError } from '../utils/error-handler';
import { validateSchema } from '../utils/validators';
import { logger } from '../utils/logger';
import { App, AppInstallation } from '../types';

export class AppService {
  async getApps(tenantId: string): Promise<Array<App & { installation: AppInstallation }>> {
    const { data, error } = await supabase
      .from('app_installations')
      .select(`
        *,
        app:apps(*)
      `)
      .eq('tenant_id', tenantId)
      .eq('status', 'active');

    if (error) {
      logger.error({ error, tenantId }, 'Failed to fetch apps');
      throw new AppError('INTERNAL_ERROR', 'Failed to fetch installed apps', error.message);
    }

    return (data ?? []).map((row: Record<string, unknown>) => ({
      ...(row['app'] as App),
      installation: {
        id: row['id'],
        tenant_id: row['tenant_id'],
        app_id: row['app_id'],
        installed_by: row['installed_by'],
        config: row['config'],
        status: row['status'],
        installed_at: row['installed_at'],
        updated_at: row['updated_at'],
      } as AppInstallation,
    }));
  }

  async getApp(tenantId: string, appId: string): Promise<App & { installation: AppInstallation }> {
    const { data, error } = await supabase
      .from('app_installations')
      .select(`
        *,
        app:apps(*)
      `)
      .eq('tenant_id', tenantId)
      .eq('app_id', appId)
      .eq('status', 'active')
      .single();

    if (error || !data) {
      throw new AppError('NOT_FOUND', `App ${appId} is not installed for this tenant`);
    }

    const row = data as Record<string, unknown>;
    return {
      ...(row['app'] as App),
      installation: {
        id: row['id'],
        tenant_id: row['tenant_id'],
        app_id: row['app_id'],
        installed_by: row['installed_by'],
        config: row['config'],
        status: row['status'],
        installed_at: row['installed_at'],
        updated_at: row['updated_at'],
      } as AppInstallation,
    };
  }

  async installApp(
    tenantId: string,
    userId: string,
    appId: string,
    config: Record<string, unknown>
  ): Promise<AppInstallation> {
    // Fetch the app definition
    const { data: app, error: appError } = await supabase
      .from('apps')
      .select('*')
      .eq('id', appId)
      .eq('is_published', true)
      .single();

    if (appError || !app) {
      throw new AppError('NOT_FOUND', `App ${appId} not found or not published`);
    }

    const appData = app as App;

    // Validate config against app's config_schema
    if (appData.config_schema && Object.keys(appData.config_schema).length > 0) {
      const validation = validateSchema(appData.config_schema, config);
      if (!validation.valid) {
        throw new AppError('INVALID_INPUT', 'App configuration is invalid', { errors: validation.errors });
      }
    }

    // Check if already installed
    const { data: existing } = await supabase
      .from('app_installations')
      .select('id')
      .eq('tenant_id', tenantId)
      .eq('app_id', appId)
      .eq('status', 'active')
      .single();

    if (existing) {
      throw new AppError('CONFLICT', `App ${appId} is already installed for this tenant`);
    }

    const now = new Date().toISOString();
    const installation: Omit<AppInstallation, 'updated_at'> & { updated_at: string } = {
      id: uuidv4(),
      tenant_id: tenantId,
      app_id: appId,
      installed_by: userId,
      config,
      status: 'active',
      installed_at: now,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from('app_installations')
      .insert(installation)
      .select()
      .single();

    if (error || !data) {
      logger.error({ error, tenantId, appId }, 'Failed to install app');
      throw new AppError('INTERNAL_ERROR', 'Failed to install app', error?.message);
    }

    logger.info({ tenantId, appId, userId }, 'App installed');
    return data as AppInstallation;
  }

  async uninstallApp(tenantId: string, appId: string): Promise<void> {
    const { data: existing } = await supabase
      .from('app_installations')
      .select('id')
      .eq('tenant_id', tenantId)
      .eq('app_id', appId)
      .eq('status', 'active')
      .single();

    if (!existing) {
      throw new AppError('NOT_FOUND', `App ${appId} is not installed for this tenant`);
    }

    const { error } = await supabase
      .from('app_installations')
      .update({ status: 'inactive', updated_at: new Date().toISOString() })
      .eq('tenant_id', tenantId)
      .eq('app_id', appId);

    if (error) {
      logger.error({ error, tenantId, appId }, 'Failed to uninstall app');
      throw new AppError('INTERNAL_ERROR', 'Failed to uninstall app', error.message);
    }

    logger.info({ tenantId, appId }, 'App uninstalled');
  }
}

export const appService = new AppService();
