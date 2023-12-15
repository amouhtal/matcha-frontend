import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/@api/services/notification/notification.service';
@Component({
  selector: 'matcha-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  notificationCount = 5;
  // counter$: Observable<number> = this.store.select('notification');
  newNotification$ = this.store.select('messageNotification');
  chatIn$: Observable<boolean> = this.store.select('clickContact');
  // messageNotificationReducer
  constructor(
    private store: Store<{
      notification: number;
      clickContact: boolean;
      messageNotification: number;
    }>,
    private router: Router,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.notificationService.getNotificationCount().subscribe({
      next: (notificationCount: any) => {
        // this.store.dispatch(
        //   notificationActions.notificationCount(notificationCount),
        // );
        this.notificationCount = notificationCount.count;
      },
    });
    this.newNotification$.subscribe({
      next: (newNotification) => {
        if (newNotification) {
          const result = Number(this.notificationCount) + 1;
          this.notificationCount = result;
        }
      },
    });
  }

  Messages() {
    this.router.navigate(['/features/chat']);
  }

  Likers() {
    this.router.navigate(['/features/']);
  }
}
