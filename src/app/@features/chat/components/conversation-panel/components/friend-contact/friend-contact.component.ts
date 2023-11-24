import { AfterContentInit, Component, Input } from '@angular/core';
import { ContactDTO } from '../../../contact-panel/models/contact.dto';
import { Store } from '@ngrx/store';
import * as chatAction from '../../../../local-store/actions/chat.action';
@Component({
  selector: 'matcha-friend-contact',
  templateUrl: './friend-contact.component.html',
  styleUrls: ['./friend-contact.component.scss'],
})
export class FriendContactComponent implements AfterContentInit {
  @Input() friendContact!: ContactDTO;

  constructor(private store: Store<{ clickContact: boolean }>) {}

  ngAfterContentInit(): void {
    this.friendContact = {
      id: 0,
      name: '',
      lastMessage: '',
      avatar: '',
      date: '',
      user_id: 0,
    };
    console.log('object');
  }

  switchToContacts() {
    console.log('immited');
    this.store.dispatch(chatAction.switchToConversation());
  }
}
