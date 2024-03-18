import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationState } from '../notifications/models/notification-state';
import * as notificationsSelectors from 'src/app/@features/notifications/local-store/selectors/notification.selector';

// MESSGAE CONSTS
const MESSAGE_NOTIFICATION = 'message';
const LIKE_NOTIFICATION = 'like';
const VIEW_NOTIFICATION = 'visits';

@Component({
  selector: 'matcha-pop-up-notification',
  templateUrl: './pop-up-notification.component.html',
  styleUrls: ['./pop-up-notification.component.scss'],
})
export class PopUpNotificationComponent implements OnDestroy {
  showNotificationMessage: string = '';
  timeOutID: any;
  unreadViewsCount$ = this.store.select(
    notificationsSelectors.unreadViewProfileCountSelector,
  );
  constructor(private store: Store<{ notificationState: NotificationState }>) {
    this.unreadViewsCount$.subscribe((count) => {
      if (count > 0) {
        this.showNotification(VIEW_NOTIFICATION, count);
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
