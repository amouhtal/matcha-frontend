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
