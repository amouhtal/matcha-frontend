import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as chatAction from '../../local-store/actions/chat.action';
import * as contactSelectors from '../../local-store/selectors/contact.selector';

@Component({
  selector: 'matcha-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, AfterContentInit {
  contact: any = {
    id: 0,
    name: '',
    lastMessage: '',
    avatar: '',
    date: '',
    user_id: 0,
  };
  contact$ = this.store.select(contactSelectors.selectedContactSelector);
  switchToConversation$: Observable<boolean> =
    this.store.select('clickContact');

  constructor(private store: Store<{ clickContact: boolean }>) {
    console.log('contact:', this.contact);
  }

  ngOnInit(): void {
    this.contact$.subscribe((contact) => {
      if (contact !== undefined) {
        this.contact = contact;
      }
    });
    this.switchToConversation$.subscribe((switchToConversation) => {
      console.log(switchToConversation);
    });
  }

  ngAfterContentInit(): void {}

  changeContact(contact: any) {
    this.contact = contact;
    this.store.dispatch(chatAction.switchToConversation());
  }

  switchPanel() {
    this.store.dispatch(chatAction.switchToConversation());
  }
}
