import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as notificationActions from '../actions/notification.action';
import { NotificationService } from 'src/app/@api/services/notification/notification.service';
import {
  catchError,
  delay,
  interval,
  map,
  of,
  switchMap,
  throttle,
} from 'rxjs';
import { NotificationStateDTO } from '../../models/notification-state.dto';

@Injectable()
export class NotificationEffects {
  constructor(
    private actions$: Actions,
    private notificationService: NotificationService,
  ) {}

  loadNotifications$ = createEffect((): Actions => {
    return this.actions$.pipe(
      ofType(notificationActions.getNotification),
      switchMap(() =>
        this.notificationService.getNotifications().pipe(
          map((notification) => {
            return notificationActions.getNotificationSuccess({
              notifications: notification as NotificationStateDTO[],
            });
          }),
          catchError((error) =>
            of(notificationActions.getNotificationFailure({ error })),
          ),
        ),
      ),
    );
  });

  // delteNotifications$ = createEffect((): Actions => {
  //   return this.actions$.pipe(
  //     ofType(notificationActions.deleteNotifications),
  //     switchMap(({ notificationsId }) =>
  //       this.notificationService.deleteNotifications(notificationsId).pipe(
  //         map(() => {
  //           return notificationActions.deleteNotificationsSuccess();
  //         }),
  //         catchError((error) =>
  //           of(notificationActions.deleteNotificationsFailure({ error })),
  //         ),
  //       ),
  //     ),
  //   );
  // });

  delteNotification$ = createEffect((): Actions => {
    return this.actions$.pipe(
      ofType(notificationActions.deleteNotification),
      switchMap(({ notificationId }) =>
        this.notificationService.deleteNotification(notificationId).pipe(
          delay(1000),
          map((notificationId) => {
            console.log('notificationId', notificationId);
            return notificationActions.deleteNotificationSuccess({
              notificationId: notificationId as number,
            });
          }),
          catchError((error) =>
            of(notificationActions.deleteNotificationsFailure({ error })),
          ),
        ),
      ),
    );
  });
  // updateNotification$ = createEffect((): Actions => {
  //   return this.actions$.pipe(
  //     ofType(notificationActions.updateNotification),
  //     switchMap(({ notification }) =>
  //       this.notificationService.updateNotification(notification).pipe(
  //         map(() => {
  //           return notificationActions.updateNotificationSuccess();
  //         }),
  //         catchError((error) =>
  //           of(notificationActions.updateNotificationFailure({ error })),
  //         ),
  //       ),
  //     ),
  //   );
  // });
  resetNotifications$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(notificationActions.resetNotification),
      switchMap(() =>
        this.notificationService.resetNotifications().pipe(
          map(() => {
            return notificationActions.resetNotificationSuccess();
          }),
          catchError((error) =>
            of(notificationActions.resetNotificationFailure({ error })),
          ),
        ),
      ),
    );
  });
}
