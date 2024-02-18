import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './pages/browse/browse.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrowseRoutingModule } from './browse-routing.module';
import { AgeGapSelectorComponent } from './components/age-gap-selector/age-gap-selector.component';



@NgModule({
  declarations: [
    BrowseComponent,
    ProfileComponent,
    AgeGapSelectorComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule
  ]
})
export class BrowseModule { }
