import { AfterContentInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactsService } from 'src/app/@api/services/chat/contacts.service';
import * as chatAction from '../../local-store/actions/chat.action';
import { Observable } from 'rxjs';
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
  contacts: any = [];
  switch = false;
  windowWidth = window;
  switchToConversation$: Observable<boolean> =
    this.store.select('clickContact');
  constructor(
    private store: Store<{ clickContact: boolean }>,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((contacts: any) => {
      this.contacts = contacts;
      this.changeContact(contacts[0]);
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
