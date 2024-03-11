import { Component, Input, OnChanges } from '@angular/core';
import { ContactDTO } from '../contact-panel/models/contact.dto';
import { MessageDTO } from './components/messages/messages.component';

@Component({
  selector: 'matcha-conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.scss'],
})
export class ConversationPanelComponent implements OnChanges {
  message!: MessageDTO ;
  @Input() friendContact: ContactDTO = {
    id: 0,
    name: '',
    lastMessage: '',
    avatar: '',
    date: '',
    user_id: 0,
    timeAgo: '',
  };

  constructor() {}

  ngOnChanges(): void {
  }

  addMessage(message: MessageDTO) {
    this.message = message;
  }
}
