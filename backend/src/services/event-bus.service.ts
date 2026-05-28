import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../config/database';
import { AppError } from '../utils/error-handler';
import { logger } from '../utils/logger';
import { Event, EventSubscriber, EventHistoryFilters } from '../types';

const WEBHOOK_TIMEOUT_MS = 5_000;
const MAX_RETRIES = 3;
const RETRY_DELAYS = [1_000, 2_000, 4_000];

export class EventBusService {
  async publishEvent(
    tenantId: string,
    eventType: string,
    aggregateType: string,
    aggregateId: string,
    data: Record<string, unknown>,
    actorId: string
  ): Promise<Event> {
    const event: Event = {
      id: uuidv4(),
      tenant_id: tenantId,
      event_type: eventType,
      aggregate_type: aggregateType,
      aggregate_id: aggregateId,
      data,
      actor_id: actorId,
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('events').insert(event);

    if (error) {
      logger.error({ error, eventType, tenantId }, 'Failed to persist event');
      throw new AppError('INTERNAL_ERROR', 'Failed to publish event', error.message);
    }

    logger.info({ eventId: event.id, eventType, tenantId }, 'Event published');

    // Fan out to subscribers asynchronously (fire-and-forget with retries)
    this.fanOutToSubscribers(tenantId, eventType, event).catch((err) => {
      logger.error({ err, eventId: event.id }, 'Fanout error');
    });

    return event;
  }

  private async fanOutToSubscribers(tenantId: string, eventType: string, event: Event): Promise<void> {
    const { data: subscribers, error } = await supabase
      .from('event_subscribers')
      .select('*')
      .eq('tenant_id', tenantId)
      .eq('event_type', eventType)
      .eq('is_active', true);

    if (error) {
      logger.error({ error, eventType, tenantId }, 'Failed to fetch subscribers');
      return;
    }

    if (!subscribers || subscribers.length === 0) {
      return;
    }

    logger.info({ count: subscribers.length, eventId: event.id }, 'Delivering to subscribers');

    await Promise.allSettled(
      (subscribers as EventSubscriber[]).map((sub) => this.deliverWebhook(sub, event))
    );
  }

  private async deliverWebhook(subscriber: EventSubscriber, event: Event): Promise<void> {
    const payload = {
      subscriber_id: subscriber.id,
      event_id: event.id,
      event_type: event.event_type,
      aggregate_type: event.aggregate_type,
      aggregate_id: event.aggregate_id,
      data: event.data,
      actor_id: event.actor_id,
      created_at: event.created_at,
    };

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        await axios.post(subscriber.webhook_url, payload, {
          timeout: WEBHOOK_TIMEOUT_MS,
          headers: { 'Content-Type': 'application/json', 'X-Event-Id': event.id },
        });
        logger.info({ subscriberId: subscriber.id, eventId: event.id, attempt }, 'Webhook delivered');
        return;
      } catch (err) {
        const delay = RETRY_DELAYS[attempt] ?? 4_000;
        logger.warn(
          { subscriberId: subscriber.id, eventId: event.id, attempt, delay },
          'Webhook delivery failed, retrying'
        );
        if (attempt < MAX_RETRIES - 1) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    logger.error({ subscriberId: subscriber.id, eventId: event.id }, 'Webhook delivery failed after all retries');

    // Increment retry count on subscriber record
    await supabase
      .from('event_subscribers')
      .update({ retry_count: subscriber.retry_count + MAX_RETRIES, updated_at: new Date().toISOString() })
      .eq('id', subscriber.id);
  }

  async subscribeToEvent(
    tenantId: string,
    eventType: string,
    appId: string,
    webhookUrl: string
  ): Promise<EventSubscriber> {
    const now = new Date().toISOString();
    const subscriber: EventSubscriber = {
      id: uuidv4(),
      tenant_id: tenantId,
      event_type: eventType,
      app_id: appId,
      webhook_url: webhookUrl,
      is_active: true,
      retry_count: 0,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from('event_subscribers')
      .insert(subscriber)
      .select()
      .single();

    if (error || !data) {
      logger.error({ error, tenantId, eventType, appId }, 'Failed to create event subscription');
      throw new AppError('INTERNAL_ERROR', 'Failed to subscribe to event', error?.message);
    }

    logger.info({ subscriberId: subscriber.id, eventType, tenantId }, 'Event subscription created');
    return data as EventSubscriber;
  }

  async unsubscribeFromEvent(subscriberId: string): Promise<void> {
    const { data: existing } = await supabase
      .from('event_subscribers')
      .select('id')
      .eq('id', subscriberId)
      .single();

    if (!existing) {
      throw new AppError('NOT_FOUND', `Subscription ${subscriberId} not found`);
    }

    const { error } = await supabase
      .from('event_subscribers')
      .update({ is_active: false, updated_at: new Date().toISOString() })
      .eq('id', subscriberId);

    if (error) {
      throw new AppError('INTERNAL_ERROR', 'Failed to unsubscribe', error.message);
    }

    logger.info({ subscriberId }, 'Event subscription deactivated');
  }

  async getEventHistory(tenantId: string, filters: EventHistoryFilters): Promise<Event[]> {
    let query = supabase
      .from('events')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false });

    if (filters.event_type) {
      query = query.eq('event_type', filters.event_type);
    }

    if (filters.aggregate_type) {
      query = query.eq('aggregate_type', filters.aggregate_type);
    }

    if (filters.aggregate_id) {
      query = query.eq('aggregate_id', filters.aggregate_id);
    }

    if (filters.from) {
      query = query.gte('created_at', filters.from);
    }

    if (filters.to) {
      query = query.lte('created_at', filters.to);
    }

    query = query.limit(filters.limit ?? 50);

    const { data, error } = await query;

    if (error) {
      logger.error({ error, tenantId, filters }, 'Failed to fetch event history');
      throw new AppError('INTERNAL_ERROR', 'Failed to fetch event history', error.message);
    }

    return (data ?? []) as Event[];
  }
}

export const eventBusService = new EventBusService();
