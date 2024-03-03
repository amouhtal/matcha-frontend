import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CommunicationService } from '../../real-time-service/communication.service';
import { Store } from '@ngrx/store';
import { NotificationState } from '../models/notification-state';
import * as NotificationActions from '../local-store/actions/notification.action';

interface RealTimeNotification {
  listenForProfileViews(): void;
  listenForProfileLikes(): void;
}

@Injectable()
export class RealTimeNotificationService implements RealTimeNotification {
  constructor(
    private communicationService: CommunicationService,
    private store: Store<{ notificationState: NotificationState }>,
  ) {
    this.listenForProfileViews();
    this.listenForProfileLikes();
  }

  listenForProfileViews(): void {
    console.log('profile viewed');
    this.communicationService.on('profileViwed', (data: string) => {
      console.log('profile viewed', data);
      this.store.dispatch(NotificationActions.newNotificationViewProfile());
    });
  }

  listenForProfileLikes(): void {
    this.communicationService.on('likeFriendProfile', () => {
      this.store.dispatch(NotificationActions.newNotificationLikeProfile());
    });
  }
}
