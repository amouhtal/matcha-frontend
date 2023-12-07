import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { PublicModule } from './@public/public.module';
import { ChatModule } from './@features/chat/chat.module';

import { CoreModule } from './@core/core.module';

@NgModule({
  declarations: [
    MatchaComponent,
  ],
  imports: [
    BrowserModule,
    MatchaRoutingModule,
    PublicModule,
    ChatModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [MatchaComponent]
})
export class MatchaModule { }
