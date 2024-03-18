import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ContactDTO } from '../../models/contact.dto';

@Component({
  selector: 'matcha-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact!: ContactDTO;
  // @Output() selectedContact = new EventEmitter<ContactDTO>();
  constructor() {}

  switToConversation() {
    // this.selectedContact.emit(this.contact);
  }
}
