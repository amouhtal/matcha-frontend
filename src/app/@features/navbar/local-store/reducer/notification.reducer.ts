import { createReducer, on } from '@ngrx/store';
import * as notificationActions from '../actions/notification.action';

const initialValue: number = 0;

export const messageNotificationReducer = createReducer(
  initialValue,
  on(notificationActions.notificationCount, (count) => {
    return count;
  }),
  on(notificationActions.newNotification, (state) => {
    return state++;
  }),
);
