import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './@features/chat/pages/chat/chat.component';
import { MainComponent } from './@features/main/pages/main/main.component';


const routes: Routes = [
  {path : "public" , loadChildren : () => import('./@public/public.module').then((m)=> m.PublicModule)},
  { path: 'chat',  component: ChatComponent },
  { path: 'home', component: MainComponent },
  // { path: '**', redirectTo: '/chat', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MatchaRoutingModule {}
