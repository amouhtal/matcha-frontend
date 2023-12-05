import { createReducer, on } from '@ngrx/store';
import * as notification from '../actions/notification.action';

const initValue = 0;
export const notificationReducer = createReducer(
  initValue,
  on(notification.NotificationAction, (state) => {
    return state + 1;
  }),
  on(notification.ResetNotificationAction, (state) => {
    return 0;
  })
);
