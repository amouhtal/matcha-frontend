import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { NotificationsModule } from '../notifications/notifications.module';
import { LogoutComponent } from 'src/app/@shared/logout/logout.component';
import { PopUpNotificationComponent } from '../pop-up-notification/pop-up-notification.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent,
    LogoutComponent,
    PopUpNotificationComponent,
  ],
  imports: [CommonModule, RouterModule, NotificationsModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
