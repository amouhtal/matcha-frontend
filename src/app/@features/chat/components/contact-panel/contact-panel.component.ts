import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContactDTO } from './models/contact.dto';
import { ContactsService } from 'src/app/@api/services/chat/contacts.service';
import { Store } from '@ngrx/store';
import * as chatAction from '../../local-store/actions/chat.action';
import * as contactSelectors from '../../local-store/selectors/contact.selector';
import * as contactActions from '../../local-store/actions/contact.action';
import { IContactsState } from '../../local-store/reducers/contact.reducer';

@Component({
  selector: 'matcha-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss'],
})
export class ContactPanelComponent implements OnChanges, OnInit {
  // @Output() changeContact = new EventEmitter<ContactDTO>();
  contacts!: ContactDTO[];
  onlineContacts!: ContactDTO[];
  selectedContact!: ContactDTO;
  contacts$ = this.store.select(contactSelectors.contactsSelector);
  selectedContact$ = this.store.select(
    contactSelectors.selectedContactSelector,
  );

  constructor(
    private store: Store<{
      clickContact: boolean;
      contactState: IContactsState;
    }>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(contactActions.getContactsAction());
    this.contacts$?.subscribe((contacts) => {
      this.contacts = contacts;
      this.onlineContacts = this.contacts;
    });

    // this.selectedContact$.subscribe((contact) => {
    //   if (contact !== undefined) {
    //     this.selectedContact = contact;
    //   }
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  // selectContact(contact: ContactDTO) {
  //   this.changeContact.emit(contact);
  // }

  switToConversation(cnvId: number) {
    this.store.dispatch(contactActions.switchToConversation({ cnvId: cnvId }));
    this.store.dispatch(chatAction.switchToConversation());
  }

  showConversation() {
    this.store.dispatch(chatAction.switchToConversation());

    console.log('switchToConversation');
  }
}
