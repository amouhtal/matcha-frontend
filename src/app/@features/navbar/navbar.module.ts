import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent],
  imports: [
    CommonModule,
    RouterModule,
    // StoreModule.forRoot({ messageNotification: notificationReducer }),
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
