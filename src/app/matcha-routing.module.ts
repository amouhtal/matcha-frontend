import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './@features/chat/pages/chat/chat.component';
import { PublicGuardService } from './@core/guards/public-guard.service';
import { MatchaComponent } from './matcha.component';
import { SignupFormComponent } from './@public/authentication/signup/components/signup-form/signup-form.component';
import { VerifiedGuardService } from './@core/guards/verified-guard.service';
import { SignupPageComponent } from './@public/authentication/signup/pages/signup-page/signup-page.component';
import { CompleteSignupPageComponent } from './@features/complete-signup/pages/complete-signup-page/complete-signup-page.component';
import { FeaturesGuardService } from './@core/guards/features-guard.service';

const routes: Routes = [
  {path : "public" ,loadChildren : () => import('./@public/public.module').then((m)=> m.PublicModule) },
  { path: 'chat',  component: ChatComponent },
  { path: "features",canActivate : [FeaturesGuardService] ,loadChildren: () => import('./@features/features.module').then((m) => m.FeaturesModule)},
  { path: '',  component: ChatComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MatchaRoutingModule {}
