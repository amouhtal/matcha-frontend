import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class CommunicationService extends Socket {
  constructor() {
    const session = JSON.parse(localStorage.getItem('session') as string);
    const userId = session.user_id;
    const roomID = session.user_id;
    super({ url: environment.socketUrl + `?roomID=${roomID}&userId=${userId}`, options: {
      withCredentials: true,
    } });
  }
}
