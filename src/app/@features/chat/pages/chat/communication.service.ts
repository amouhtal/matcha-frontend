import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class CommunicationService extends Socket {
  constructor() {
    super({ url: environment.socketUrl + '?roomID=1&userId=3', options: {
      withCredentials: true,
    } });
  }
}
