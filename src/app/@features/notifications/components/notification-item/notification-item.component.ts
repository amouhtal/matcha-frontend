import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'matcha-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent implements OnChanges {
  @Input() notification: any;
  constructor() {}

  ngOnChanges(): void {}
}
