import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/@api/services/chat/contacts.service';

@Component({
  selector: 'matcha-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterContentInit {
  contact!: any;
  contacts!: any;
  constructor(
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    this.contactsService.getContacts(1).subscribe((contacts: any) => {
      this.contacts = contacts;
      this.changeContact(contacts[0]);
      console.log('contacts', contacts[0]);
    });
    
  }
  changeContact(contact: any) {
    console.log('contact', contact);
    this.contact = contact;
  }
}
