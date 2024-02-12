import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './@shared/page-not-found/page-not-found.component';

import { CompleteSignupPageComponent } from './@features/complete-signup/pages/complete-signup-page/complete-signup-page.component';
import { FeaturesGuardService } from './@core/guards/features-guard.service';

const routes: Routes = [
  { path : "public" ,loadChildren : () => import('./@public/public.module').then((m)=> m.PublicModule) },
  { path: "features", canActivate : [FeaturesGuardService] ,loadChildren: () => import('./@features/features.module').then((m) => m.FeaturesModule)},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }, 
  // { path: '**', redirectTo: '/chat', pathMatch: 'full' }  { path: "features",canActivate : [FeaturesGuardService] ,loadChildren: () => import('./@features/features.module').then((m) => m.FeaturesModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MatchaRoutingModule {}
