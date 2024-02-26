import { NgModule } from '@angular/core';
import { OtherUserPageComponent } from './pages/other-user-page/other-user-page.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    OtherUserPageComponent,
    
  ],
  providers: [],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    RouterModule,
    NgOptimizedImage,
    MatIconModule
  ],
})
export class UserProfileModule {}
