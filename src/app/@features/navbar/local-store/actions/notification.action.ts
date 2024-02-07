import { createAction, props } from '@ngrx/store';
import { NotificationStateDTO } from '../../../notifications/models/notification-state.dto';

export const notificationCount = createAction(
  '[NOTIFICATION_COUNT]',
  props<{ count: number }>(),
);
export const newNotification = createAction('NEW_NOTIFICATION');
