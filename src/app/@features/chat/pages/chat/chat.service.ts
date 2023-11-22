import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationService } from './communication.service';

@Injectable()
export class ChatStreamService {
  constructor(private communicationService: CommunicationService) {}

  sendMessage(msg: any) {
    this.communicationService.emit('sendFriendMessage', msg);
  }

  receiveMessage() {
    const message$ = new Observable<{ message: any }>((observer) => {
      this.communicationService.on('receiveFriendMessage', (msg: any) => {
        console.log('emit message');
        observer.next(msg);
      });
      return () => {
        this.communicationService.disconnect();
      };
    });
    return message$;
  }
}
