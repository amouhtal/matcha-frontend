import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuardService } from './@core/guards/public-guard.service';
import { MatchaComponent } from './matcha.component';
import { SignupFormComponent } from './@public/authentication/signup/components/signup-form/signup-form.component';
import { VerifiedGuardService } from './@core/guards/verified-guard.service';
import { SignupPageComponent } from './@public/authentication/signup/pages/signup-page/signup-page.component';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./@public/public.module').then((m) => m.PublicModule),
  },
  {
    path :'p' , component : SignupPageComponent , canActivate: [VerifiedGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MatchaRoutingModule {}
