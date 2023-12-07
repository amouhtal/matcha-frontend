import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './@features/chat/pages/chat/chat.component';
import { MainComponent } from './@features/main/pages/main/main.component';
import { PublicGuardService } from './@core/guards/public-guard.service';
import { MatchaComponent } from './matcha.component';
import { SignupFormComponent } from './@public/authentication/signup/components/signup-form/signup-form.component';
import { VerifiedGuardService } from './@core/guards/verified-guard.service';
import { SignupPageComponent } from './@public/authentication/signup/pages/signup-page/signup-page.component';

const routes: Routes = [
  {path : "public" , loadChildren : () => import('./@public/public.module').then((m)=> m.PublicModule)},
  { path: 'chat',  component: ChatComponent },
  { path: 'home', component: MainComponent },
  { path: '**', redirectTo: '/chat', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MatchaRoutingModule {}
