import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationService } from '../../../real-time-service/communication.service';
import { Store } from '@ngrx/store';
import * as NotificationAction from 'src/app/@features/navbar/local-store/actions/notification.action';
// import { NotificationAction } from '../../local-store/actions/notification.action';
@Injectable()
export class ChatStreamService {
  constructor(
    private communicationService: CommunicationService,
    private store: Store<{ notification: number }>,
  ) {}

  sendMessage(msg: any) {
    this.communicationService.emit('sendFriendMessage', msg);
  }

  receiveMessage() {
    const message$ = new Observable<{ message: any }>((observer) => {
      this.communicationService.on('receiveFriendMessage', (msg: any) => {
        observer.next(msg);
        this.store.dispatch(NotificationAction.newNotification());
      });
      return () => {
        this.communicationService.disconnect();
      };
    });
    return message$;
  }
}
