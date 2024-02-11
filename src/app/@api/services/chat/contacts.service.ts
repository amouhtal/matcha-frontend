import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  getContacts() {
    const userID: number = localStorage.getItem('session')
      ? JSON.parse(localStorage.getItem('session') as string).user_id
      : 0;
    return this.http.get('http://localhost:3000/chat/conversations', {
      params: {
        userID,
      },
    });
  }

  getLastContact(userID: number) {
    return this.http.get('http://localhost:3000/chat/conversations');
  }
}
