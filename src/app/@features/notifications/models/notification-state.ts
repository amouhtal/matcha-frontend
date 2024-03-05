import {
  NotificationStateDTO,
  NotificationTypeLikeProfileDTO,
  NotificationTypeViewProfileDTO,
} from './notification-state.dto';

// export interface NotificationState {
//   notificationState: NotificationStateDTO[];
//   unreadNotificationCount: number;
//   unreadMessageCount: number;
//   unreadViewProfileCount: number;
//   unreadLikeProfileCount: number;
//   loading: boolean;
//   loaded: boolean;
//   error: null;
// }

export interface NotificationState {
  notificationState: NotificationStateDTO[];
  unreadNotificationCount: number;
  unreadMessageCount: number;
  unreadViewProfileCount: number;
  unreadLikeProfileCount: number;
  // viewProfileState: NotificationTypeViewProfileDTO[];
  // likeProfileState: NotificationTypeLikeProfileDTO[];
  loading: boolean;
  loaded: boolean;
  error: null;
}
