import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IContactsState } from '../reducers/contact.reducer';

export const contactsStateSelector: any =
  createFeatureSelector<IContactsState>('contactsState');

export const contactsSelector = createSelector(
  contactsStateSelector,
  (state: IContactsState) => state.contacts,
);

export const selectedContactSelector = createSelector(
  contactsStateSelector,
  (state: IContactsState) => state.selectedContact
);