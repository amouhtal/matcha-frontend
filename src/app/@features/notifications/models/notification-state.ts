import {
  NotificationStateDTO,
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

// • When the user receives a “like”.
// • When the user’s profile has been viewed.
// • When the user receives a message.
// • When “liked” user also “likes” the user back.
// • When a connected user “unlikes” the user

export interface NotificationState {
  notificationState: NotificationStateDTO[];
  unreadNotificationCount: number;
  unreadLikeProfileCount: number;
  unreadViewProfileCount: number;
  unreadMessageCount: number;
  unreadLikeBackProfileCount: number;
  unreadUnlikeProfileCount: number;
  loading: boolean;
  loaded: boolean;
  error: null;
}
