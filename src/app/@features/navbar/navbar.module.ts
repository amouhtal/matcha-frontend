import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NotificationsComponent } from '../notifications/notifications.component';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent, NotificationsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
