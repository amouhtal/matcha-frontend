import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ContactDTO } from './models/contact.dto';
import { ContactsService } from 'src/app/@api/services/chat/contacts.service';
import { Store } from '@ngrx/store';
import * as chatAction from '../../local-store/actions/chat.action';

@Component({
  selector: 'matcha-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss'],
})
export class ContactPanelComponent implements OnChanges {
  @Output() changeContact = new EventEmitter<ContactDTO>();
  @Input() contacts!: ContactDTO[];
  constructor(
    private store: Store<{ clickContact: boolean }>,
    private contactsService: ContactsService
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  selectContact(contact: ContactDTO) {
    this.changeContact.emit(contact);
  }

  switchToConversation() {
    this.store.dispatch(chatAction.switchToConversation());
  }
}
