import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './@shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path : "public" , loadChildren : () => import('./@public/public.module').then((m)=> m.PublicModule)},
  { path: "features", loadChildren: () => import('./@features/features.module').then((m) => m.FeaturesModule)},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }, 
  // { path: '**', redirectTo: '/chat', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MatchaRoutingModule {}
