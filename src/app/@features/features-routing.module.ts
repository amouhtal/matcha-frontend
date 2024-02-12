import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/pages/main/main.component';
import { FeaturesComponent } from './features/features.component';
import { ChatComponent } from './chat/pages/chat/chat.component';
import { BrowseComponent } from './browse/pages/browse/browse.component';
import { CompleteSignupPageComponent } from "./complete-signup/pages/complete-signup-page/complete-signup-page.component";
import { CompleteSignupGuardService } from "../@core/guards/complete-signup-guard.service";
// import { NotificationsComponent } from './notifications/pages/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: 'home', component: MainComponent },
      { path: 'chat', component: ChatComponent },
      {path: 'browse', component: BrowseComponent},
      {
        path: 'complete-signup',
        component: CompleteSignupPageComponent,
        canActivate: [CompleteSignupGuardService],
      },
      // { path: 'notifications', component: NotificationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
