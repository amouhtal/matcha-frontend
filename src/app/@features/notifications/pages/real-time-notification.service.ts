import { Injectable } from '@angular/core';
import { CommunicationService } from '../../real-time-service/communication.service';
import { Store } from '@ngrx/store';
import { NotificationState } from '../models/notification-state';
import * as NotificationActions from '../local-store/actions/notification.action';

// • When the user receives a “like”.
// • When the user’s profile has been viewed.
// • When the user receives a message.
// • When “liked” user also “likes” the user back.
// • When a connected user “unlikes” the user

interface RealTimeNotificationListener {
  listenForProfileViews(): void;
  listenForProfileLikes(): void;
  listenForMessages(): void;
  listenForLikeBacks(): void;
  listenForUnlikes(): void;
}
// interface for emitting to the server

interface RealTimeNotificationEmitter {
  emitLikeProfile(data: any): void;
  emitViewProfile(data: any): void;
  emitMessage(data: any): void;
  emitLikeBackProfile(data: any): void;
  emitUnlikeProfile(data: any): void;
}

// interface for listening to the server

@Injectable({
  providedIn: 'root',
})
export class RealTimeNotificationService
  implements RealTimeNotificationListener, RealTimeNotificationEmitter
{
  constructor(
    private communicationService: CommunicationService,
    private store: Store<{ notificationState: NotificationState }>,
  ) {}

  listenForProfileLikes(): void {
    this.communicationService.on('likeFriendProfile', () => {
      this.store.dispatch(NotificationActions.newNotificationLikeProfile());
    });
  }

  listenForProfileViews(): void {
    this.communicationService.on('profileViwed', (data: string) => {
      this.store.dispatch(NotificationActions.newNotificationViewProfile());
    });
  }

  listenForMessages(): void {
    this.communicationService.on('message', () => {
      this.store.dispatch(NotificationActions.newNotificationMessage());
    });
  }

  listenForLikeBacks(): void {
    this.communicationService.on('likeBack', () => {
      this.store.dispatch(NotificationActions.newNotificationLikeBackProfile());
    });
  }

  listenForUnlikes(): void {
    this.communicationService.on('unlikeFriendProfile', () => {
      this.store.dispatch(NotificationActions.newNotificationUnlikeProfile());
    });
  }

  emitLikeProfile(data: any): void {
    this.communicationService.emit('likeFriendProfile', data);
  }

  emitViewProfile(data: any): void {
    this.communicationService.emit('viewProfile', data);
  }

  emitMessage(data: any): void {
    this.communicationService.emit('message', data);
  }

  emitLikeBackProfile(data: any): void {
    this.communicationService.emit('likeBack', data);
  }

  emitUnlikeProfile(data: any): void {
    this.communicationService.emit('unlikeFriendProfile', data);
  }
}
