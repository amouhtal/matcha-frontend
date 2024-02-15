import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { PublicModule } from './@public/public.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompletePageModule } from './@features/complete-signup/complete-signup.module';
import { FeaturesModule } from './@features/features.module';
import { PageNotFoundComponent } from './@shared/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MatchaComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    MatchaRoutingModule,
    CoreModule,
    HttpClientModule,
    PublicModule,
    FeaturesModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
        
    }),
    BrowserAnimationsModule,
    CompletePageModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [MatchaComponent],
})
export class MatchaModule {}
