import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherUserPageComponent } from './pages/other-user-page/other-user-page.component';

// import { NotificationsComponent } from './notifications/pages/notifications.component';

const routes: Routes = [
  {
    path: 'profile',
    component: OtherUserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
