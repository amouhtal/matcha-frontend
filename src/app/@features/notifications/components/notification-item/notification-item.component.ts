import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { notificationDTO } from '../../models/notification.dto';
import { Store } from '@ngrx/store';
import { NotificationState } from '../../models/notification-state';

@Component({
  selector: 'matcha-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnChanges {
  @Input('notification') notification!: notificationDTO;
  deleteNotificationId: number[] = [];
  is_read: boolean;
  pending_delete: boolean;
  constructor(private store: Store<{ notificationState: NotificationState }>) {
    this.is_read = false;
    this.pending_delete = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['notification'].currentValue);
  }

  markAsRead() {
    this.is_read = true;
    // this.notification.is_read = true;
  }

  deleteNotification(notificationId: number) {
    this.deleteNotificationId.push(notificationId);
    this.pending_delete = true;
  }
}
