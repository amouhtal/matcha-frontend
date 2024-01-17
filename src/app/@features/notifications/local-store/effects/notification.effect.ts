import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as notificationActions from '../actions/notification.action';
import { NotificationService } from 'src/app/@api/services/notification/notification.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { NotificationStateDTO } from '../../models/notification-state.dto';

@Injectable()
export class NotificationEffects {
  constructor(
    private actions$: Actions,
    private notificationService: NotificationService,
  ) {}

  loadNotifications$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(notificationActions.getNotification),
      switchMap(() =>
        this.notificationService.getNotifications().pipe(
          map((notification) => {
            console.log('notification', notification);
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
