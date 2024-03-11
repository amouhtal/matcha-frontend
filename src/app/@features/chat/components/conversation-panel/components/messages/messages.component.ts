import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MessagesService } from 'src/app/@api/services/chat/messages.service';
import { ChatStreamService } from 'src/app/@features/chat/pages/chat/chat.service';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { IContactsState } from 'src/app/@features/chat/local-store/reducers/contact.reducer';
import * as contactActions from 'src/app/@features/chat/local-store/actions/contact.action';

export interface MessageDTO {
  id: number;
  message: string;
  date: Date;
  isMe: boolean;
}

@Component({
  selector: 'matcha-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewChecked
{
  @Input() cnvId!: number | undefined;

  private subscription!: any;
  messages!: MessageDTO[];
  @Input() message!: MessageDTO;
  @ViewChild('scrollDown') scrollDown!: ElementRef;
  private titleUpdateInterval: any;
  constructor(
    private messgesService: MessagesService,
    private chatStreamService: ChatStreamService,
    private titleService: Title,
    private store: Store<{
      messageNotification: number;
      contactState: IContactsState;
    }>,
  ) {}

  ngAfterViewChecked(): void {
    if (this.scrollDown && this.scrollDown.nativeElement) {
      this.scrollDown.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }
  ngOnInit(): void {
    // this.cnvId = 1;

    this.loadConversation(this.cnvId);
    this.chatStreamService.receiveMessage().subscribe((msg: any) => {
      this.addMessage(msg);
    });
    // this.chatStreamService.receiveNotification().subscribe((msg: any) => {
    //   this.store.dispatch(notificationActions.newNotification());
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cnvId']?.currentValue) {
      this.cnvId = changes['cnvId'].currentValue;
      this.loadConversation(this.cnvId);
      console.log('cnvId', this.cnvId);
    }
    if (changes['message']?.currentValue) {
      this.addMessage(changes['message'].currentValue);
    }
  }

  loadConversation(cnvId: number | undefined) {
    if (cnvId === undefined) return;
    this.subscription = this.messgesService
      .getConversationMessages(cnvId)
      .subscribe((messages: any) => {
        this.messages = messages;
      });
  }

  addMessage(message: MessageDTO) {
    this.messages.push(message);
    console.log('cnvId', this.cnvId);
    this.store.dispatch(contactActions.sortConversationsByDate());
    const updateContact = {
      cnvId: this.cnvId,
      lastMessage: message.message,
      date: message.date,
    };

    if (this.cnvId !== undefined)
      this.store.dispatch(
        contactActions.updateContact({ updateContact: updateContact }),
      );
    let showTitle = true;
    const pageTitle = this.titleService.getTitle();
    // this.titleUpdateInterval = setInterval(() => {
    //   showTitle = !showTitle;
    //   console.log(showTitle);
    //   this.updateTitle(showTitle, pageTitle, '| 🔔 New Message');
    // }, 2000);
  }

  updateTitle(show: boolean, pageTitle: string, notification: string) {
    if (show) {
      this.titleService.setTitle(notification);
    } else {
      this.titleService.setTitle(pageTitle);
    }
    if (!document.hidden) {
      this.titleService.setTitle(pageTitle);
      clearInterval(this.titleUpdateInterval);
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('component messages destroyed');
  }
}
