import { NgModule } from '@angular/core';
import { OtherUserPageComponent } from './pages/other-user-page/other-user-page.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'
import { MatIconModule } from '@angular/material/icon';
import { UserApiService } from 'src/app/@api/services/user/user-api.service';
import { MatchsApiService } from 'src/app/@api/services/matchs/matchs-api.service';

@NgModule({
  declarations: [
    OtherUserPageComponent,
    
  ],
  providers: [UserApiService,MatchsApiService],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    RouterModule,
    NgOptimizedImage,
    MatIconModule
  ],
})
export class UserProfileModule {}
