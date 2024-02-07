import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './pages/browse/browse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowseRoutingModule } from './browse-routing.module';



@NgModule({
  declarations: [
    BrowseComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule
  ]
})
export class BrowseModule { }
