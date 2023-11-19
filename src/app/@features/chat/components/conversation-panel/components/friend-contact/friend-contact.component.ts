import { AfterContentInit, Component, Input } from '@angular/core';
import { ContactDTO } from '../../../contact-panel/models/contact.dto';

@Component({
  selector: 'matcha-friend-contact',
  templateUrl: './friend-contact.component.html',
  styleUrls: ['./friend-contact.component.scss'],
})
export class FriendContactComponent implements AfterContentInit {
  @Input() friendContact!: ContactDTO 

  constructor() {
  }

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
}
