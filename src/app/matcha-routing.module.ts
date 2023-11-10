import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'auth',  loadChildren : () => import('./@features/authentication/authentication.module').then((m)=> m.AuthenticationModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MatchaRoutingModule { }
