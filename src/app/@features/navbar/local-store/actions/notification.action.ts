import { createAction, props } from '@ngrx/store';

export const notificationCount = createAction(
  '[NOTIFICATION_COUNT]',
  props<{ count: number }>(),
);

export const newNotification = createAction('NEW_NOTIFICATION');

