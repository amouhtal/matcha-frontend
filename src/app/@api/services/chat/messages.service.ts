import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  getConversationMessages(cnvId: number) {
    const userID: number = localStorage.getItem('session')
      ? JSON.parse(localStorage.getItem('session') as string).user_id
      : 0;
    return this.http.get('http://localhost:3000/chat/messages', {
      params: {
        cnvId,
        userID,
      },
    });
  }
}
