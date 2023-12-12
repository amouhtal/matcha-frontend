import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  getConversationMessages(cnvId: number) {
    // console.log('id', cnvId);
    return this.http.get('http://localhost:3000/chat/messages', {
      params: {
        cnvId,
      },
    });
  }
}
