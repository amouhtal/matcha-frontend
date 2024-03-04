import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Store } from '@ngrx/store';
import * as notificationActions from '../local-store/actions/notification.action';
import * as notificationsSelectors from '../local-store/selectors/notification.selector';
import { notificationDTO } from '../models/notification.dto';

@Component({
  selector: 'matcha-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, OnChanges {
  notifications: Array<notificationDTO> = [];
  notificationType = 'like';
  // // key value array
  // notificationTypeMap = {
  //   like: 'Like History',
  //   view: 'View History',
  //   message: 'Message History',
  //   all: 'Notification',
  // };
  @Input() notificationBarState: boolean = true;
  // @Input() notificationType: string = 'like';
  constructor(
    private store: Store<{
      // notificationState: any;
    }>,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['notificationBarState'].currentValue === true) {
      this.store.dispatch(notificationActions.resetNotification());
    }
  }

  // notifications$ = this.store.select('notificationState');
  notificationState$ = this.store.select(
    notificationsSelectors.notificationState,
  );

  unreadNotificationCount$ = this.store.select(
    notificationsSelectors.unreadNotificationCountSelector,
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

  notificationTypeLikeProfileDTO$ = this.store.select(
    notificationsSelectors.likeProfileStateSelector,
  );

  notificationTypeViewProfileDTO$ = this.store.select(
    notificationsSelectors.viewProfileStateSelector,
  );

  ngOnInit(): void {
    this.store.dispatch(notificationActions.getNotification());

    this.notificationState$.subscribe({
      next: (notificationState: any) => {
        this.notifications = notificationState.notificationState;


        // console.log(this.notifications);
      },
    });
  }
}
