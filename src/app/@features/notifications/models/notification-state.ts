import { NotificationStateDTO } from './notification-state.dto';

export interface NotificationState {
  notificationState: NotificationStateDTO[];
  unreadNotificationCount: number;
  unreadMessageCount: number;
  loading: boolean;
  loaded: boolean;
  error: null;
}
