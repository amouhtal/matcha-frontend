import { Component, Input } from '@angular/core';
import { ContactDTO } from '../../../contact-panel/models/contact.dto';

@Component({
  selector: 'matcha-friend-contact',
  templateUrl: './friend-contact.component.html',
  styleUrls: ['./friend-contact.component.scss']
})
export class FriendContactComponent {
  @Input() friendContact!: ContactDTO;
}
