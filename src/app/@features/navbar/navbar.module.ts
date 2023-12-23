import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { NotificationsModule } from '../notifications/notifications.module';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent],
  imports: [CommonModule, RouterModule, NotificationsModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
