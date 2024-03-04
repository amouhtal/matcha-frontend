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
  viewProfileState: NotificationTypeViewProfileDTO[];
  unreadViewProfileCount: number;
  likeProfileState: NotificationTypeLikeProfileDTO[];
  unreadLikeProfileCount: number;
  loading: boolean;
  loaded: boolean;
  error: null;
}
