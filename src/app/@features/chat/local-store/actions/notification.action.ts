import { createAction } from '@ngrx/store';

export const NotificationAction = createAction('[Chat] New Notification');

export const ResetNotificationAction = createAction(
  '[Chat] Reset Notification'
);
