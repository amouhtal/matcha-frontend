import { createReducer, on } from '@ngrx/store';
import * as notificationActions from '../actions/notification.action';
import { NotificationStateDTO } from '../../models/notification-state.dto';

const initialValue: number = 0;

export const messageNotificationReducer = createReducer(
  initialValue,
  on(notificationActions.notificationCount, (count) => {
    return count;
  }),
  on(notificationActions.newNotification, (state) => {
    return state + 1;
  }),
);

export interface NotificationState {
  notificationState: NotificationStateDTO[];
  loading: boolean;
  loaded: boolean;
  error: null;
}
// export const notificationState: NotificationStateDTO[] = [];
export const initialState: NotificationState = {
  notificationState: [],
  loading: false,
  loaded: false,
  error: null,
};

export const notificationReducer = createReducer(
  initialState,
  on(notificationActions.getNotification, (state) => {
    return {
      ...state,
      loading: true,

    };
  }),
  on(notificationActions.getNotificationSuccess, (state: NotificationState, {notifications}) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      notificationState: notifications,
    };
  }),
  on(
    notificationActions.getNotificationFailure,
    (state: NotificationState, { error }) => {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };
    },
  ),
);

/*
 Argument of type '(state: NotificationState) => { loading: boolean; notificationState: NotificationStateDTO[]; loaded: false; error: null; }' is not assignable to parameter of type 'OnReducer<NotificationState, [ActionCreator<"[GET_NOTIFICATION]", () => TypedAction<"[GET_NOTIFICATION]">>], { loading: boolean; notificationState: NotificationStateDTO[]; loaded: false; error: null; }, NotificationState>'.
  Call signature return types '{ loading: boolean; notificationState: NotificationStateDTO[]; loaded: false; error: null; }' and 'NotificationState' are incompatible.
    The types of 'loading' are incompatible between these types.
      Type 'boolean' is not assignable to type 'false' 
 */
