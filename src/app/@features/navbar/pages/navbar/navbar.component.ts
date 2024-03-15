import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/@api/services/notification/notification.service';
import * as notificationsSelectors from 'src/app/@features/notifications/local-store/selectors/notification.selector';
@Component({
  selector: 'matcha-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  notificationCount: number = 0;
  notificationOn: boolean = false;
  notificationType = 'visited_profile';
  // counter$: Observable<number> = this.store.select('notification');
  newNotification$ = this.store.select('messageNotification');
  chatIn$: Observable<boolean> = this.store.select('clickContact');

  unreadMessagesCount$ = this.store.select(
    notificationsSelectors.unreadMessagesCountSelector,
  );

  unreadViewsCount$ = this.store.select(
    notificationsSelectors.unreadViewProfileCountSelector,
  );

  unreadLikesCount$ = this.store.select(
    notificationsSelectors.unreadLikeProfileCountSelector,
  );

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

  Navigate(prefix: string) {
    this.router.navigate([`/features/${prefix}`]);
  }

  Messages() {
    this.router.navigate(['/features/chat']);
  }

  Browse() {
    this.router.navigate(['/features/browse']);
  }

  toggleNotification(notificationType: string) {
    this.notificationOn = !this.notificationOn;
    if (this.notificationOn) {
      this.notificationType = notificationType;
    }
    // this.router.navigate(['/features/notifications']);
  }

  Likers() {
    this.router.navigate(['/features/']);
  }
}
