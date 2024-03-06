import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { notificationDTO } from '../../models/notification.dto';
import { Store } from '@ngrx/store';
import { NotificationState } from '../../models/notification-state';
import * as notificationActions from '../../local-store/actions/notification.action';

@Component({
  selector: 'matcha-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnChanges, OnDestroy {
  @Input('notification') notification!: notificationDTO;
  deleteNotificationId: number[] = [];
  is_read: boolean;
  pending_delete: boolean;
  deleted: boolean = false;
  // notificationXDeleted: boolean = false;
  constructor(private store: Store<{ notificationState: NotificationState }>) {
    this.is_read = false;
    this.pending_delete = false;
    this.listenOnDelete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.is_read = this.notification.is_read;
  }

  markAsRead() {
    this.is_read = true;
    // this.notification.is_read = true;
  }

  deleteNotification(notificationId: number) {
    // this.deleteNotificationId.push(notificationId);
    this.deleted = true;
    this.store.dispatch(
      notificationActions.deleteNotification({ notificationId }),
    );
    this.pending_delete = true;
  }

  listenOnDelete() {}

  ngOnDestroy(): void {}
}
