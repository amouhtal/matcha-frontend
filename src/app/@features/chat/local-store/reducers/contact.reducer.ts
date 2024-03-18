import { createReducer, on } from '@ngrx/store';
import { ContactDTO } from '../../components/contact-panel/models/contact.dto';
import * as contactActions from '../actions/contact.action';

export interface IContactsState {
  contacts: ContactDTO[];
  selectedContact: ContactDTO | undefined;
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

export const contactsInitialState: IContactsState = {
  contacts: [],
  selectedContact: undefined,
  loading: false,
  loaded: false,
  error: null,
};

export const contactsReducer = createReducer(
  contactsInitialState,
  on(
    contactActions.getContactsAction,
    (contactsState: IContactsState): IContactsState => {
      return {
        ...contactsState,
        loading: true,
      };
    },
  ),
  on(
    contactActions.getContactsSuccessAction,
    (contactsState: IContactsState, { contacts }): IContactsState => {
      return {
        ...contactsState,
        contacts: contacts,
        loading: false,
        loaded: true,
      };
    },
  ),
  on(
    contactActions.getContactsFailureAction,
    (contactsState: IContactsState, { error }): IContactsState => {
      return {
        ...contactsState,
        loading: false,
        loaded: false,
        error: error,
      };
    },
  ),
  on(
    contactActions.sortConversationsByDate,
    (contactsState: IContactsState): IContactsState => {
      let sortedContacts = [...contactsState.contacts];
      sortedContacts = sortedContacts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      console.log('sortedContacts', sortedContacts);
      return {
        ...contactsState,
        contacts: sortedContacts,
      };
    },
  ),
  on(
    contactActions.updateContact,
    (contactsState: IContactsState, { updateContact }): IContactsState => {
      let updatedContacts: ContactDTO[] = contactsState.contacts.map(
        (contact) => {
          if (contact.id === updateContact.cnvId) {
            return {
              ...contact,
              lastMessage: updateContact.lastMessage,
              date: updateContact.date.toString(),
              timeAgo: 'now',
            };
          }
          return contact;
        },
      );
      console.log('updatedContacts', updatedContacts);
      const sorteContacts = updatedContacts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      return {
        ...contactsState,
        contacts: sorteContacts,
      };
    },
  ),
  on(
    contactActions.switchToConversation,
    (contactsState: IContactsState, { cnvId }): IContactsState => {
      return {
        ...contactsState,
        selectedContact: contactsState.contacts.find(
          (contact) => contact.id === cnvId,
        ),
      };
    },
  ),
);
