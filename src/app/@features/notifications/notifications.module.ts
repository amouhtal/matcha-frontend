import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationsComponent } from './pages/notifications.component';

@NgModule({
  declarations: [NotificationsComponent, NotificationItemComponent],
  imports: [CommonModule, NotificationsRoutingModule],
  exports: [NotificationsComponent],
})
export class NotificationsModule {}