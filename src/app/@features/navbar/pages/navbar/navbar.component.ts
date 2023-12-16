import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/@api/services/notification/notification.service';
import * as notificationsSelectors from '../../local-store/selectors/notification.selector';
import * as notificationActions from '../../local-store/actions/notification.action';

@Component({
  selector: 'matcha-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  notificationCount = 5;
  // counter$: Observable<number> = this.store.select('notification');
  newNotification$ = this.store.select('messageNotification');
  test$ = this.store.select('notificationState');
  chatIn$: Observable<boolean> = this.store.select('clickContact');

  notificationState$ = this.store.select(
    notificationsSelectors.notificationState,
  );
  notificationsLoading$ = this.store.select(
    notificationsSelectors.notificationsLoadingSelector,
  );
  notificationsLoaded$ = this.store.select(
    notificationsSelectors.notificationsLoadedSelector,
  );
  notificationsError$ = this.store.select(
    notificationsSelectors.notificationsErrorSelector,
  );
  
  constructor(
    private store: Store<{
      notification: number;
      clickContact: boolean;
      messageNotification: number;
      notificationState: any;
    }>,
    private router: Router,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(notificationActions.getNotification());
    
    this.notificationState$.subscribe({
      next: (notificationState) => {
      },
    });

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

  Notifications() {
    this.router.navigate(['/features/notifications']);
  }
  Likers() {
    this.router.navigate(['/features/']);
  }
}
