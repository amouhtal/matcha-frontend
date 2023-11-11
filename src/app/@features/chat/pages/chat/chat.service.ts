import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: Socket) {
    this.socket.connect();
  }

  sendMessage(msg: string) {
    this.socket.emit('sendFriendMessage', msg);
  }

  receiveMessage() {
    const message$ = new Observable<{ message: any }>((observer) => {
      this.socket.on('receiveFriendMessage', (msg: any) => {
        observer.next(msg);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return message$;
  }
}
