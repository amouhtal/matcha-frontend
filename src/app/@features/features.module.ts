import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { ChatModule } from './chat/chat.module';
import { NavbarModule } from './navbar/navbar.module';
import { FeaturesComponent } from './features/features.component';
import { StoreModule } from '@ngrx/store';
import { clickContactReducer } from './chat/local-store/reducers/chat.reducer';
import { EffectsModule } from '@ngrx/effects';
import { messageNotificationReducer } from './navbar/local-store/reducer/notification.reducer';
import { notificationReducer } from './notifications/local-store/reducer/notification.reducer';
import { NotificationEffects } from './notifications/local-store/effects/notification.effect';
import { BrowseModule } from './browse/browse.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { UserProfileModule } from './user-profile/user-profile.module';
import { CommunicationService } from './real-time-service/communication.service';
import { PopUpNotificationComponent } from './pop-up-notification/pop-up-notification.component';
import { contactsReducer } from './chat/local-store/reducers/contact.reducer';
import { ContactEffect } from './chat/local-store/effects/contact.effect';

@NgModule({
  declarations: [FeaturesComponent, PopUpNotificationComponent],
  providers: [NotificationEffects, CommunicationService],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ChatModule,
    NavbarModule,
    BrowseModule,
    FontAwesomeModule,
    RouterModule,
    UserProfileModule,
    StoreModule.forFeature('clickContact', clickContactReducer),
    StoreModule.forFeature('contactsState', contactsReducer),
    StoreModule.forFeature('messageNotification', messageNotificationReducer),
    StoreModule.forFeature('notificationState', notificationReducer),
    EffectsModule.forFeature([NotificationEffects, ContactEffect]),
  ],
})
export class FeaturesModule {}
