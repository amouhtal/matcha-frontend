import { createAction, props } from '@ngrx/store';
import { NotificationStateDTO } from 'src/app/@features/notifications/models/notification-state.dto';

export const getNotification = createAction('[GET_NOTIFICATION]');

export const getNotificationSuccess = createAction(
  '[GET_NOTIFICATION_SUCCESS]',
  props<{ notifications: NotificationStateDTO[] }>(),
);

export const getNotificationFailure = createAction(
  '[GET_NOTIFICATION_FAILURE]',
  props<{ error: any }>(),
);

export const deleteNotifications = createAction(
  '[DELETE_NOTIFICATION]',
  props<{ notificationsId: number[] }>(),
);

export const deleteNotificationsSuccess = createAction(
  '[DELETE_NOTIFICATION_SUCCESS]',
);

export const deleteNotificationsFailure = createAction(
  '[DELETE_NOTIFICATION_FAILURE]',
  props<{ error: any }>(),
);

export const resetNotification = createAction('[RESET_NOTIFICATION]');

export const resetNotificationSuccess = createAction(
  '[RESET_NOTIFICATION_SUCCESS]',
);

export const resetNotificationFailure = createAction(
  '[RESET_NOTIFICATION_FAILURE]',
  props<{ error: any }>(),
);

export const newNotificationMessage = createAction(
  '[NEW_NOTIFICATION_MESSAGE]',
);

export const newNotificationViewProfile = createAction(
  '[NEW_NOTIFICATION_VIEW_PROFILE]',
);

export const newNotificationLikeProfile = createAction(
  '[NEW_NOTIFICATION_LIKE_PROFILE]',
);
