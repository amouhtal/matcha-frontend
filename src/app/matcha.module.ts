import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { ChatModule } from './@features/chat/chat.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MatchaComponent],
  imports: [
    BrowserModule,
    MatchaRoutingModule,
    ChatModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MatchaComponent],
})
export class MatchaModule {}
