import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class CommunicationService extends Socket {
  constructor() {
    const session = JSON.parse(sessionStorage.getItem('session') as string);
    // console.log('session', session);
    const userId = session.user_id;
    const roomID = session.user_id;
    // console.log('userId', userId);
    super({ url: environment.socketUrl + `?roomID=${roomID}&userId=${userId}`, options: {
      withCredentials: true,
    } });
  }
}
