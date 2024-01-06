import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { PublicModule } from './@public/public.module';
import { ChatModule } from './@features/chat/chat.module';

import { CoreModule } from './@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompletePageModule } from './@features/complete-signup/complete-signup.module';

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
    BrowserAnimationsModule,
    CompletePageModule
  ],
  providers: [],
  bootstrap: [MatchaComponent]
})
export class MatchaModule { }
