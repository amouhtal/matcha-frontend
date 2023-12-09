import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { PublicModule } from './@public/public.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { PageNotFoundComponent } from './@shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [MatchaComponent, PageNotFoundComponent,],
  imports: [
    BrowserModule,
    MatchaRoutingModule,
    CoreModule,
    HttpClientModule,
    PublicModule,

  ],
  providers: [],
  bootstrap: [MatchaComponent],
})
export class MatchaModule {}
