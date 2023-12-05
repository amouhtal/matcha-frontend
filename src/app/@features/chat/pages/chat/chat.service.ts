import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationService } from './communication.service';
import { Store } from '@ngrx/store';
import { NotificationAction } from '../../local-store/actions/notification.action';
@Injectable()
export class ChatStreamService {
  constructor(
    private communicationService: CommunicationService,
    private store: Store<{ notification: number }>
  ) {}

  sendMessage(msg: any) {
    this.communicationService.emit('sendFriendMessage', msg);
  }

  receiveMessage() {
    const message$ = new Observable<{ message: any }>((observer) => {
      this.communicationService.on('receiveFriendMessage', (msg: any) => {
        console.log('emit message');
        observer.next(msg);
        this.store.dispatch(NotificationAction());
      });
      return () => {
        this.communicationService.disconnect();
      };
    });
    return message$;
  }
}
