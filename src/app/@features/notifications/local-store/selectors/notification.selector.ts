import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotificationState } from '../../models/notification-state';
import {
  NotificationTypeLikeProfileDTO,
  NotificationTypeViewProfileDTO,
} from '../../models/notification-state.dto';

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

export const unreadViewProfileCountSelector = createSelector(
  notificationState,
  (state) => state.unreadViewProfileCount,
);

// array of view profile notifications
// export const viewProfileStateSelector = createSelector(
//   notificationState,
//   (state): Array<NotificationTypeViewProfileDTO> => state.viewProfileState,
// );

// export const likeProfileStateSelector = createSelector(
//   notificationState,
//   (state): Array<NotificationTypeLikeProfileDTO> => state.likeProfileState,
// );

export const unreadLikeProfileCountSelector = createSelector(
  notificationState,
  (state) => state.unreadLikeProfileCount,
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
