import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MessagesService } from 'src/app/@api/services/chat/messages.service';
import { ChatStreamService } from 'src/app/@features/chat/pages/chat/chat.service';
import { Title } from '@angular/platform-browser';

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
export class MessagesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() cnvId!: number | undefined;
  private subscription!: any;
  messages!: MessageDTO[];
  @Input() message!: MessageDTO;
  private titleUpdateInterval: any;
  constructor(
    private messgesService: MessagesService,
    private chatStreamService: ChatStreamService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.cnvId = 1;

    this.loadConversation(this.cnvId);
    this.chatStreamService.receiveMessage().subscribe((msg: any) => {
      console.log('msg received', msg);
      this.addMessage(msg);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cnvId']?.currentValue) {
      this.cnvId = changes['cnvId'].currentValue;
      this.loadConversation(1);
    }
    if (changes['message']?.currentValue) {
      this.addMessage(changes['message'].currentValue);
    }
  }

  loadConversation(cnvId: number) {
    this.subscription = this.messgesService
      .getConversationMessages(cnvId)
      .subscribe((messages: any) => {
        this.messages = messages;
        console.log('result', messages);
      });
  }

  addMessage(message: MessageDTO) {
    this.messages.push(message);
    let showTitle = true;
    const pageTitle = this.titleService.getTitle();
    this.titleUpdateInterval = setInterval(() => {
      showTitle = !showTitle;
      console.log(showTitle);
      this.updateTitle(showTitle, pageTitle, '| 🔔 New Message');
    }, 2000);
  }

  updateTitle(show: boolean, pageTitle: string, notification: string) {
    // Logic to determine if there are new messages
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
  }
}
