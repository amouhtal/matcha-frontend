import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ContactDTO } from '../contact-panel/models/contact.dto';
import { MessageDTO } from './components/messages/messages.component';
import * as contactSelectors from '../../local-store/selectors/contact.selector';
import { Store } from '@ngrx/store';
import { IContactsState } from '../../local-store/reducers/contact.reducer';

@Component({
  selector: 'matcha-conversation-panel',
  templateUrl: './conversation-panel.component.html',
  styleUrls: ['./conversation-panel.component.scss'],
})
export class ConversationPanelComponent implements OnChanges, OnInit {
  message!: MessageDTO;
  contact$ = this.store.select(contactSelectors.selectedContactSelector);
  friendContact: ContactDTO = {
    id: 0,
    name: '',
    lastMessage: '',
    avatar: '',
    date: '',
    user_id: 0,
    timeAgo: '',
  };

  constructor(private store: Store<{ contactState: IContactsState }>) {}

  ngOnChanges(): void {}

  ngOnInit(): void {
    this.contact$.subscribe((contact) => {
      console.log(
        '🚀 ~ file: conversation-panel.component.ts ~ line 42 ~ ConversationPanelComponent ~ this.contact$.subscribe ~ contact',
        contact
      );
      if (contact) {
        this.friendContact = contact;
      }
    });
  }

  addMessage(message: MessageDTO) {
    this.message = message;
  }

}
