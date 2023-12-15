import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { ChatModule } from './chat/chat.module';
import { NavbarModule } from './navbar/navbar.module';
import { FeaturesComponent } from './features/features.component';
import { StoreModule } from '@ngrx/store';
import { clickContactReducer } from './chat/local-store/reducers/chat.reducer';
// import { notificationReducer } from './chat/local-store/reducers/notification.reducer';
import { messageNotificationReducer } from './navbar/local-store/reducer/notification.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ChatModule,
    NavbarModule,
    StoreModule.forRoot({
      clickContact: clickContactReducer,
      messageNotification: messageNotificationReducer,
      // notification: notificationReducer,
    }),
    EffectsModule.forRoot([]),
  
  ],
  bootstrap: [FeaturesComponent],
})
export class FeaturesModule {}
