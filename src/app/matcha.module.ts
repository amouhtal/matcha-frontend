import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { AuthenticationModule } from './@features/authentication/authentication.module';
import { PublicModule } from './@public/public.module';

@NgModule({
  declarations: [
    MatchaComponent
  ],
  imports: [
    BrowserModule,
    MatchaRoutingModule,
    AuthenticationModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [MatchaComponent]
})
export class MatchaModule { }
