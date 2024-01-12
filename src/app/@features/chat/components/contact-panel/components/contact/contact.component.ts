import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactDTO } from '../../models/contact.dto';
import {Router} from '@angular/router'

@Component({
  selector: 'matcha-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact!: ContactDTO;
  @Output() selectedContact = new EventEmitter<ContactDTO>();
  constructor(private router: Router) {}

  switToConversation() {
    this.selectedContact.emit(this.contact);
  }
}
