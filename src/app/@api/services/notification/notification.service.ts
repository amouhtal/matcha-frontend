import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  userID!: number;
  constructor(private http: HttpClient) {
    this.userID = sessionStorage.getItem('session')
      ? JSON.parse(sessionStorage.getItem('session') as string).user_id
      : 0;
  }

  getNotificationCount() {
    return this.http.get('http://localhost:3000/notification/count', {
      params: {
        userId: this.userID,
      },
    });
  }

  getNotifications() {
    return this.http.get('http://localhost:3000/notification', {
      params: {
        userId: this.userID,
      },
    });
  }

  addNotification(notification: any) {
    return this.http.post('http://localhost:3000/notification', {
      params: {
        userId: this.userID,
      },
    });
  }

  updateNotification(notificationId: any) {
    return this.http.put('http://localhost:3000/notification', {
      params: {
        userId: this.userID,
        notificationId: notificationId,
      },
    });
  }
}
