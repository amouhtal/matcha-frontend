import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { ChatModule } from './@features/chat/chat.module';

@NgModule({
  declarations: [
    MatchaComponent
  ],
  imports: [
    BrowserModule,
    MatchaRoutingModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [MatchaComponent]
})
export class MatchaModule { }
