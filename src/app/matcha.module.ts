import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';

@NgModule({
  declarations: [
    MatchaComponent
  ],
  imports: [
    BrowserModule,
    MatchaRoutingModule
  ],
  providers: [],
  bootstrap: [MatchaComponent]
})
export class MatchaModule { }
