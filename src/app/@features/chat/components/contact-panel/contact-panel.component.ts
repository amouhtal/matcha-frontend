import { Component } from '@angular/core';
import { ContactDTO } from './models/contact.dto';


@Component({
  selector: 'matcha-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent {
  contacts : ContactDTO[] = [
    {
      name: 'John Doe',
      lastMessage: 'Lorem ipsum dolor sit amet',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'Jane Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'John Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'Jane Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'John Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'Jane Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'John Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'Jane Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'John Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'Jane Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'John Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'Jane Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'John Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'Jane Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    },
    {
      name: 'John Doe',
      lastMessage: 'Lorem ipsum dolor sit amet,',
      avatar: 'https://picsum.photos/200',
      date: '10:00'
    }
  ];
  constructor() {}
}
