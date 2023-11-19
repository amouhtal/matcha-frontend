import { Component, OnInit } from '@angular/core';
import { ChatStreamService } from './chat.service';
import { ContactsService } from 'src/app/@api/services/chat/contacts.service';

@Component({
  selector: 'matcha-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  contact!: any;
  contacts!: any;
  constructor(
    private chatStreamService: ChatStreamService,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactsService.getContacts(1).subscribe(
      (contacts: any)=> {
        this.contacts = contacts;
        this.changeContact(contacts[0]);
        console.log('contacts', contacts[0]);
      }
    )
    this.chatStreamService.receiveMessage().subscribe((msg) => {
      console.log(msg);
    });
  }

  changeContact(contact: any) {
    console.log('contact', contact);
    this.contact = contact;
  }
}
