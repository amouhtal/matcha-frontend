import { createAction, props } from '@ngrx/store';
import { ContactDTO } from '../../components/contact-panel/models/contact.dto';

export const getContactsAction = createAction('[Chat] Get Contacts');

export const getContactsSuccessAction = createAction(
  '[Chat] Get Contacts Success',
  props<{ contacts: Array<ContactDTO> }>(),
);

export const getContactsFailureAction = createAction(
  '[Chat] Get Contacts Failure',
  props<{ error: string }>(),
);

export const sortConversationsByDate = createAction(
  '[Chat] Sort Conversations By Date',
);

export const updateContact = createAction(
  '[Chat] Update Contact',
  props<{
    updateContact: {
      cnvId: number | undefined;
      lastMessage: string;
      date: Date;
    };
  }>(),
);


export const switchToConversation = createAction(
  '[Chat] Switch To Conversation',
  props<{ cnvId: number }>(),
);
