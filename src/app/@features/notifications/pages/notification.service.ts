import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CommunicationService } from '../../real-time-service/communication.service';
import { Store } from '@ngrx/store';
import { NotificationState } from '../models/notification-state';

interface RealTimeNotification {
  listenForProfileVisits(): void;
  listenForProfileLikes(): void;
}

@Injectable()
export class NotificationService implements RealTimeNotification {
  constructor(
    private communicationService: CommunicationService,
    // this is the store that will be used to dispatch the notification action
    private store: Store<{ notificationState : NotificationState  }>,
  ) {}

  listenForProfileVisits(): void {
    this.communicationService.on('visitFriendProfile', (msg: any) => {
      this.store.dispatch({ type: 'NEW_NOTIFICATION' });
    });
  }

  listenForProfileLikes(): void {}

}
