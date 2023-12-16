import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { ChatModule } from './chat/chat.module';
import { NavbarModule } from './navbar/navbar.module';
import { FeaturesComponent } from './features/features.component';
import { Store, StoreModule } from '@ngrx/store';
import { clickContactReducer } from './chat/local-store/reducers/chat.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NotificationEffects } from './navbar/local-store/effects/notification.effects';
import {
  messageNotificationReducer,
  notificationReducer,
} from './navbar/local-store/reducer/notification.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FeaturesComponent],
  providers: [NotificationEffects],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ChatModule,
    NavbarModule,
    // StoreModule.forRoot({
    //   clickContact: clickContactReducer,
    //   messageNotification: messageNotificationReducer,
    //   notificationState: notificationReducer,
    //   // notification: notificationReducer,
    // }),
    StoreModule.forFeature('notificationState', notificationReducer),
    
    StoreModule.forFeature('clickContact', clickContactReducer),
    StoreModule.forFeature('messageNotification', messageNotificationReducer),
    EffectsModule.forFeature([NotificationEffects]),
  ],
  // bootstrap: [FeaturesComponent],
})
export class FeaturesModule {}
