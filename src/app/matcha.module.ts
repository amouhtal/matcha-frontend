import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { PublicModule } from './@public/public.module';
import { CoreModule } from './@core/core.module';

@NgModule({
  declarations: [
    MatchaComponent,
  ],
  imports: [
    BrowserModule,
    MatchaRoutingModule,
    PublicModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [MatchaComponent]
})
export class MatchaModule { }
