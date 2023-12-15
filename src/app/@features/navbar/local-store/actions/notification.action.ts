import { createAction, props } from '@ngrx/store';
import { NotificationStateDTO } from '../../models/notification-state.dto';

export const notificationCount = createAction(
  '[NOTIFICATION_COUNT]',
  props<{ count: number }>(),
);


// addNotification, addNotificationSuccess, addNotificationFailure,

// getNotification, getNotificationSuccess, getNotificationFailure,

export const getNotification = createAction('[GET_NOTIFICATION]');
export const getNotificationSuccess = createAction(
  '[GET_NOTIFICATION_SUCCESS]',
  props<{ notifications: NotificationStateDTO[] }>(),
);
export const getNotificationFailure = createAction(
  '[GET_NOTIFICATION_FAILURE]',
  props<{ error: any }>(),
);

export const newNotification = createAction('NEW_NOTIFICATION');

