import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactDTO } from './models/contact.dto';
import { ContactsService } from 'src/app/@api/services/chat/contacts.service';


@Component({
  selector: 'matcha-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent {
  @Output() changeContact = new EventEmitter<ContactDTO>();
  @Input() contacts! : ContactDTO[];
  // = 
  // [
  //   {
  //     name: 'John Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet',
  //     avatar: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=5074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'Jane Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'John Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'Jane Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'John Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'Jane Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'John Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'Jane Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'John Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'Jane Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'John Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'Jane Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'John Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'Jane Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   },
  //   {
  //     name: 'John Doe',
  //     lastMessage: 'Lorem ipsum dolor sit amet,',
  //     avatar: 'https://picsum.photos/200',
  //     date: '10:00'
  //   }
  // ];

  constructor(private contactsService: ContactsService) {
    // console.log(this.contactsService.getContacts(1).subscribe((contacts: any) => {
    //   console.log(contacts);
    //   this.contacts = contacts;
    // }));
  }

  selectContact(contact: ContactDTO) {
    this.changeContact.emit(contact);
  }
}
