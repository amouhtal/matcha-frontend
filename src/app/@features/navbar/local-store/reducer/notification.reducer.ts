import { createReducer, on } from '@ngrx/store';
import * as notificationActions from '../actions/notification.action';

interface NotificationState {
  type: string;
  text: string;
  is_read: boolean;
}

export const initialState: NotificationState[] = [];

export const notificationReducer = createReducer(
  initialState,
  on(notificationActions.notification, (state, { notifications }) => {
    return notifications;
  }),
);
const initialValue: number = 0;

export const messageNotificationReducer = createReducer(
  initialValue,
  on(notificationActions.notificationCount, (count) => {
    return count;
  }),
  on(notificationActions.newNotification, (state) => {
    return state + 1;
  }),
);
