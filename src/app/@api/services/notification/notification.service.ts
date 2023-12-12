import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getNotificationCount() {
    const userId: number = sessionStorage.getItem('session')
      ? JSON.parse(sessionStorage.getItem('session') as string).user_id
      : 0;

    return this.http.get('http://localhost:3000/notification/count', {
      params: {
        userId,
      },
    });
  }
}
