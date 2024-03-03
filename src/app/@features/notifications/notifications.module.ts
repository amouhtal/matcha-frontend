import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationsComponent } from './pages/notifications.component';
import { NotificationService } from 'src/app/@api/services/notification/notification.service';
import { RealTimeNotificationService } from './pages/notification.service';

@NgModule({
  declarations: [NotificationsComponent, NotificationItemComponent],
  imports: [CommonModule, NotificationsRoutingModule],
  exports: [NotificationsComponent],
  providers: [NotificationService, RealTimeNotificationService],
})
export class NotificationsModule {}
