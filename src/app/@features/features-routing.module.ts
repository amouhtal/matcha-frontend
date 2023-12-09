import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ChatComponent } from './chat/pages/chat/chat.component';
import { MainComponent } from './main/pages/main/main.component';
import { FeaturesComponent } from './features/features.component';
import { ChatComponent } from './chat/pages/chat/chat.component';

const routes: Routes = [
  {
    path: '', component: FeaturesComponent, children: [
    { path: 'home', component: MainComponent },
    { path: 'chat', component: ChatComponent },
  ] 
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }