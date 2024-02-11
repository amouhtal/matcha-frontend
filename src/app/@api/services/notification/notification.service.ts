import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  userID!: number;
  constructor(private http: HttpClient) {
    this.userID = localStorage.getItem('session')
      ? JSON.parse(localStorage.getItem('session') as string).user_id
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

  resetNotifications() {
    console.log('this.userID', this.userID);
    return this.http.put('http://localhost:3000/notification/resetAllRead', {
      params: {
        userId: this.userID,
      },
    });
  }
}
