import { createAction, props } from '@ngrx/store';
import { ContactDTO } from '../../components/contact-panel/models/contact.dto';

export const getContactsAction = createAction('[Chat] Get Contacts');

export const getContactsSuccessAction = createAction(
  '[Chat] Get Contacts Success',
  props<{ contacts: Array<ContactDTO> }>(),
);
