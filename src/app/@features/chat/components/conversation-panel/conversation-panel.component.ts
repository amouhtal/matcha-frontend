import { Component, Input } from '@angular/core';
import { ContactDTO } from '../contact-panel/models/contact.dto';

@Component({
  selector: 'matcha-conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.scss'],
})
export class ConversationPanelComponent {
  @Input() friendContact: ContactDTO = {
    id: 0,
    name: '',
    lastMessage: '',
    avatar: '',
    date: '',
    user_id: 0
  } ;

  constructor() {}
}
