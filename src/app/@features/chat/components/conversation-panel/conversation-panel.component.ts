import { Component } from '@angular/core';
import { ContactDTO } from '../contact-panel/models/contact.dto';

@Component({
  selector: 'matcha-conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.scss'],
})
export class ConversationPanelComponent {
  friendContact: ContactDTO = {
    name: 'Batman',
    lastMessage: 'I have one power. I never give up.',
    avatar: 'https://img.freepik.com/premium-vector/bat-logo-classic-vector_841637-45.jpg?w=2000',
    date: '',
  };
  constructor() {}
}
