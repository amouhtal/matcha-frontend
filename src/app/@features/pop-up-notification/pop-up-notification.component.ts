import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationState } from '../notifications/models/notification-state';
import * as notificationsSelectors from 'src/app/@features/notifications/local-store/selectors/notification.selector';

// MESSGAE CONSTS
const MESSAGE_NOTIFICATION = 'message';
const LIKE_NOTIFICATION = 'like';
const VIEW_NOTIFICATION = 'visits';
const UNLIKE_NOTIFICATION = 'unlike';
const UNLIKE_BACK_NOTIFICATION = 'unlike back';
const LIKE_BACK_NOTIFICATION = 'like back';

@Component({
  selector: 'matcha-pop-up-notification',
  templateUrl: './pop-up-notification.component.html',
  styleUrls: ['./pop-up-notification.component.scss'],
})
export class PopUpNotificationComponent implements OnDestroy {
  showNotificationMessage: string = '';
  timeOutID: any;
  NOTIFICATION_ICONS = {
    like: 'favorite',
    visits: 'visibility',
    message: 'message',
    unlike: 'block',
    'unlike back': 'block',
    'like back': 'favorite',
  };
  notificationType: string = 'favorite';
  unreadLikesCount$ = this.store.select(
    notificationsSelectors.unreadLikeProfileCountSelector,
  );

  unreadViewsCount$ = this.store.select(
    notificationsSelectors.unreadViewProfileCountSelector,
  );

  unreadLikesBackCount$ = this.store.select(
    notificationsSelectors.unreadLikeBackProfileCountSelector,
  );

  unreadUnlikesCount$ = this.store.select(
    notificationsSelectors.unreadUnlikesCountSelector,
  );

  constructor(private store: Store<{ notificationState: NotificationState }>) {
    this.unreadViewsCount$.subscribe((count) => {
      if (count > 0) {
        this.showNotification(VIEW_NOTIFICATION, count);
        this.notificationType = this.NOTIFICATION_ICONS['visits'];
      }
    });

    this.unreadLikesCount$.subscribe((count) => {
      if (count > 0) {
        this.showNotification(LIKE_NOTIFICATION, count);
        this.notificationType = this.NOTIFICATION_ICONS['like'];
      }
    });

    this.unreadLikesBackCount$.subscribe((count) => {
      if (count > 0) {
        this.showNotification(LIKE_BACK_NOTIFICATION, count);
        this.notificationType = this.NOTIFICATION_ICONS['like back'];
      }
    });

    this.unreadUnlikesCount$.subscribe((count) => {
      if (count > 0) {
        this.showNotification(UNLIKE_BACK_NOTIFICATION, count);
        this.notificationType = this.NOTIFICATION_ICONS['unlike back'];
      }
    });
  }

  showNotification(
    msg: string = 'You have new notifications',
    count: number = 0,
  ) {
    if (this.timeOutID) window.clearTimeout(this.timeOutID);
    this.showNotificationMessage = `You have ${count} new ${msg} notifications`;
    this.timeOutID = setTimeout(() => {
      this.showNotificationMessage = '';
      window.clearTimeout(this.timeOutID);
    }, 4000);
  }

  ngOnDestroy() {
    clearTimeout(this.timeOutID);
  }
}
