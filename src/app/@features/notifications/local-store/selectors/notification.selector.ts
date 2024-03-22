import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from '../../models/notification-state';

export const notificationState =
  createFeatureSelector<NotificationState>('notificationState');

export const notificationsSelector = createSelector(
  notificationState,
  (state) => state.notificationState,
);

export const unreadNotificationCountSelector = createSelector(
  notificationState,
  (state) => state.unreadNotificationCount,
);

export const unreadMessagesCountSelector = createSelector(
  notificationState,
  (state) => state.unreadMessageCount,
);


export const unreadLikeProfileCountSelector = createSelector(
  notificationState,
  (state) => state.unreadLikeProfileCount,
);

export const unreadViewProfileCountSelector = createSelector(
  notificationState,
  (state) => state.unreadViewProfileCount,
);

export const unreadLikeBackProfileCountSelector = createSelector(
  notificationState,
  (state) => state.unreadLikeBackProfileCount,
);

export const unreadUnlikesCountSelector = createSelector(
  notificationState,
  (state) => state.unreadUnlikeProfileCount,
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
