import { createReducer, on } from '@ngrx/store';
import * as notificationActions from '../actions/notification.action';
import { NotificationState } from '../../models/notification-state';

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
  on(
    notificationActions.getNotification,
    (state: NotificationState): NotificationState => {
      
      return {
        ...state,
        loading: true,
      };
    },
  ),
  on(
    notificationActions.getNotificationSuccess,
    (state: NotificationState, { notifications }): NotificationState => {
      let unreadNotificationCount = state.unreadNotificationCount;
      let unreadMessageCount = state.unreadMessageCount;
      notifications.map((notification) => {
        unreadNotificationCount++;
        console.log(notification.type);
        if (notification.type === 'message') {
          unreadMessageCount++;
        }
      });
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
  on(notificationActions.resetNotification, (state: NotificationState) => {
      return {
        ...state,
        loading: true,
      };
  }),
  on(notificationActions.resetNotificationSuccess, (state: NotificationState) => {
    return {
        ...state,
        loading: false,
        loaded: true,
        unreadNotificationCount: 0,
        unreadMessageCount: 0,
      };
  }),
  on(notificationActions.resetNotificationFailure, (state: NotificationState, { error }) => {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };
  }),
);
