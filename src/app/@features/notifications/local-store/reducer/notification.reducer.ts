import { createReducer, on } from '@ngrx/store';
import * as notificationActions from '../actions/notification.action';
import { NotificationState } from '../../models/notification-state';

// export const initialState: NotificationState = {
//   notificationState: [],
//   unreadNotificationCount: 0,
//   unreadMessageCount: 0,
//   unreadViewProfileCount: 0,
//   unreadLikeProfileCount: 0,
//   loading: false,
//   loaded: false,
//   error: null,
// };

// • When the user receives a “like”.
// • When the user’s profile has been viewed.
// • When the user receives a message.
// • When “liked” user also “likes” the user back.
// • When a connected user “unlikes” the user

export const initialState: NotificationState = {
  notificationState: [],
  unreadNotificationCount: 0,
  unreadLikeProfileCount: 0,
  unreadViewProfileCount: 0,
  unreadMessageCount: 0,
  unreadLikeBackProfileCount: 0,
  unreadUnlikeProfileCount: 0,

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
      let unreadLikeProfileCount = state.unreadLikeProfileCount;
      let unreadViewProfileCount = state.unreadViewProfileCount;
      let unreadMessageCount = state.unreadMessageCount;
      let unreadLikeBackProfileCount = state.unreadLikeBackProfileCount;
      let unreadUnlikeProfileCount = state.unreadUnlikeProfileCount;

      notifications.forEach((notification) => {
        unreadNotificationCount++;
        if (notification.type === 'message') {
          unreadMessageCount++;
        } else if (notification.type === 'view_profile') {
          // viewProfileState.push(notification);
          unreadViewProfileCount++;
        } else if (notification.type === 'like_profile') {
          // likeProfileState.push(notification);
          unreadLikeProfileCount++;
        } else if (notification.type === 'like_back_profile') {
          unreadLikeBackProfileCount++;
        } else if (notification.type === 'unlike_profile') {
          unreadUnlikeProfileCount++;
        }
      });
      return {
        ...state,
        loading: false,
        loaded: true,
        unreadNotificationCount: unreadNotificationCount,
        unreadMessageCount: unreadMessageCount,
        unreadViewProfileCount: unreadViewProfileCount,
        unreadLikeProfileCount: unreadLikeProfileCount,
        unreadLikeBackProfileCount: unreadLikeBackProfileCount,
        unreadUnlikeProfileCount: unreadUnlikeProfileCount,
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
  on(
    notificationActions.deleteNotification,
    (state: NotificationState): NotificationState => {
      return {
        ...state,
        loading: true,
      };
    },
  ),
  on(
    notificationActions.deleteNotificationSuccess,
    (state: NotificationState, { notificationId }) => {
      const notificationState = state.notificationState.filter(
        (notification) => notification.id !== notificationId,
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        notificationState: notificationState,
      };
    },
  ),
  on(
    notificationActions.deleteNotifications,
    (state: NotificationState): NotificationState => {
      return {
        ...state,
        loading: true,
      };
    },
  ),
  on(
    notificationActions.deleteNotificationsSuccess,
    (state: NotificationState) => {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    },
  ),
  on(
    notificationActions.deleteNotificationsFailure,
    (state: NotificationState, { error }) => {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };
    },
  ),
  on(
    notificationActions.newNotificationLikeProfile,
    (state: NotificationState) => {
      return {
        ...state,
        unreadLikeProfileCount: state.unreadLikeProfileCount + 1,
        unreadViewProfileCount: state.unreadViewProfileCount + 1,
      };
    },
  ),
  on(
    notificationActions.newNotificationViewProfile,
    (state: NotificationState) => {
      return {
        ...state,
        unreadViewProfileCount: state.unreadViewProfileCount + 1,
      };
    },
  ),
  on(notificationActions.newNotificationMessage, (state: NotificationState) => {
    return {
      ...state,
      unreadMessageCount: state.unreadMessageCount + 1,
    };
  }),
  on(
    notificationActions.newNotificationLikeBackProfile,
    (state: NotificationState) => {
      return {
        ...state,
        unreadLikeBackProfileCount: state.unreadLikeBackProfileCount + 1,
      };
    },
  ),
  on(
    notificationActions.newNotificationUnlikeProfile,
    (state: NotificationState) => {
      return {
        ...state,
        unreadUnlikeProfileCount: state.unreadUnlikeProfileCount + 1,
      };
    },
  ),

  on(notificationActions.resetNotification, (state: NotificationState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(
    notificationActions.resetNotificationSuccess,
    (state: NotificationState) => {
      return {
        ...state,
        loading: false,
        loaded: true,
        unreadNotificationCount: 0,
        unreadMessageCount: 0,
      };
    },
  ),
  on(
    notificationActions.resetNotificationFailure,
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

// export const notificationReducer = createReducer(
//   initialState,
//   on(
//     notificationActions.getNotification,
//     (state: NotificationState): NotificationState => {
//       return {
//         ...state,
//         loading: true,
//       };
//     },
//   ),
//   on(
//     notificationActions.getNotificationSuccess,
//     (state: NotificationState, { notifications }): NotificationState => {
//       let unreadNotificationCount = state.unreadNotificationCount;
//       let unreadMessageCount = state.unreadMessageCount;
//       let unreadViewProfileCount = state.unreadViewProfileCount;
//       let unreadLikeProfileCount = state.unreadLikeProfileCount;
//       notifications.forEach((notification) => {
//         unreadNotificationCount++;
//         console.log(notification.type);
//         if (notification.type === 'message') {
//           unreadMessageCount++;
//         } else if (notification.type === 'view_profile') {
//           unreadViewProfileCount++;
//         } else if (notification.type === 'like_profile') {
//           unreadLikeProfileCount++;
//         }
//       });
//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//         unreadNotificationCount: unreadNotificationCount,
//         unreadMessageCount: unreadMessageCount,
//         unreadViewProfileCount: unreadViewProfileCount,
//         unreadLikeProfileCount: unreadLikeProfileCount,
//         notificationState: notifications,
//       };
//     },
//   ),
//   on(
//     notificationActions.getNotificationFailure,
//     (state: NotificationState, { error }) => {
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//         error: error,
//       };
//     },
//   ),
//   on(notificationActions.newNotificationMessage, (state: NotificationState) => {
//     return {
//       ...state,
//       unreadMessageCount: state.unreadMessageCount + 1,
//     };
//   }),
//   on(
//     notificationActions.newNotificationViewProfile,
//     (state: NotificationState) => {
//       return {
//         ...state,
//         unreadViewProfileCount: state.unreadViewProfileCount + 1,
//       };
//     },
//   ),
//   on(
//     notificationActions.newNotificationLikeProfile,
//     (state: NotificationState) => {
//       return {
//         ...state,
//         unreadLikeProfileCount: state.unreadLikeProfileCount + 1,
//       };
//     },
//   ),
//   on(notificationActions.resetNotification, (state: NotificationState) => {
//     return {
//       ...state,
//       loading: true,
//     };
//   }),
//   on(
//     notificationActions.resetNotificationSuccess,
//     (state: NotificationState) => {
//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//         unreadNotificationCount: 0,
//         unreadMessageCount: 0,
//       };
//     },
//   ),
//   on(
//     notificationActions.resetNotificationFailure,
//     (state: NotificationState, { error }) => {
//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//         error: error,
//       };
//     },
//   ),
// );
