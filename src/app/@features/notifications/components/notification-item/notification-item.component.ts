import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { notificationDTO } from '../../models/notification.dto';

@Component({
  selector: 'matcha-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnChanges {
  @Input('notification') notification!: notificationDTO;
  constructor() {}

  ngOnChanges( changes: SimpleChanges ): void {
    console.log(changes['notification'].currentValue);
  }
}
