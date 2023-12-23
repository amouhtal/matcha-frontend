import { createReducer, on } from '@ngrx/store';
import * as notificationActions from '../actions/notification.action';
import { NotificationStateDTO } from '../../models/notification-state.dto';

export interface NotificationState {
  notificationState: NotificationStateDTO[];
  unreadNotificationCount: number;
  unreadMessageCount: number;
  loading: boolean;
  loaded: boolean;
  error: null;
}

export const initialState: NotificationState = {
  notificationState: [],
  unreadNotificationCount: 0,
  unreadMessageCount: 0,
  loading: false,
  loaded: false,
  error: null,
};

export const notificationReducer = createReducer(
  initialState,
  on(notificationActions.getNotification, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    notificationActions.getNotificationSuccess,
    (state: NotificationState, { notifications }) => {
      let unreadNotificationCount = state.unreadNotificationCount;
      let unreadMessageCount = state.unreadMessageCount;
      notifications.map((notification) => {
        unreadNotificationCount++;
        console.log(notification.type);
        if (notification.type === 'message') {
          unreadMessageCount++;
        }
      });
      console.log('notificationMessageCount', unreadMessageCount);
      return {
        ...state,
        loading: false,
        loaded: true,
        unreadNotificationCount: unreadNotificationCount,
        unreadMessageCount: unreadMessageCount,
        notificationState: notifications,
      };
    },
  ),
  on(
    notificationActions.getNotificationFailure,
    (state: NotificationState, { error }) => {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };
    },
  ),
);
