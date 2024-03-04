import { Injectable } from '@angular/core';
import { CommunicationService } from '../../real-time-service/communication.service';
import { Store } from '@ngrx/store';
import { NotificationState } from '../models/notification-state';
import * as NotificationActions from '../local-store/actions/notification.action';

interface RealTimeNotification {
  listenForProfileViews(): void;
  listenForProfileLikes(): void;
}

@Injectable({
  providedIn: 'root',
})
export class RealTimeNotificationService implements RealTimeNotification {
  constructor(
    private communicationService: CommunicationService,
    private store: Store<{ notificationState: NotificationState }>,
  ) {
    console.log('notificationn service created');
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
