import { NotificationStateDTO } from './notification-state.dto';

export interface NotificationState {
  notificationState: NotificationStateDTO[];
  unreadNotificationCount: number;
  unreadMessageCount: number;
  unreadViewProfileCount: number,
  unreadLikeProfileCount: number,
  loading: boolean;
  loaded: boolean;
  error: null;
}
