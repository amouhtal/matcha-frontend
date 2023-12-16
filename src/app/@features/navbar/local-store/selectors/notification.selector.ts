import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from '../reducer/notification.reducer';

export const notificationState =
  createFeatureSelector<NotificationState>('notificationState');



export const notificationsSelector = createSelector(
  notificationState,
  (state) => state.notificationState,
);

export const notificationsLoadingSelector = createSelector(
  notificationState,
  (state: NotificationState) => state.loading,
);

export const notificationsLoadedSelector = createSelector(
  notificationState,
  (state: NotificationState) => state.loaded,
);

export const notificationsErrorSelector = createSelector(
  notificationState,
  (state: NotificationState) => state.error,
);
