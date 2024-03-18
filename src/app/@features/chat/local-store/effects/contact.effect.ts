import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as contactActions from '../actions/contact.action';
import { catchError, delay, map, of, switchMap } from 'rxjs';
import { ContactsService } from 'src/app/@api/services/chat/contacts.service';
import { ContactDTO } from '../../components/contact-panel/models/contact.dto';

@Injectable()
export class ContactEffect {

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService,
  ) {}

  loadContacts$ = createEffect((): Actions => {
    return this.actions$.pipe(
      ofType(contactActions.getContactsAction),
      switchMap(() =>
        this.contactsService.getContacts().pipe(
          map((contacts) => {
            return contactActions.getContactsSuccessAction({
              contacts: contacts as ContactDTO[],
            });
          }),
          catchError((error) =>
            of(contactActions.getContactsFailureAction({ error })),
          ),
        ),
      ),
    );
  });
}
