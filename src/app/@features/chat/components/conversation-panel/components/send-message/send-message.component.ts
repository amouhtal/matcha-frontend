import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ChatStreamService } from 'src/app/@features/chat/pages/chat/chat.service';
import { MessageDTO } from '../messages/messages.component';

@Component({
  selector: 'matcha-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnChanges {
  @Output() addMessage: EventEmitter<MessageDTO> =
    new EventEmitter<MessageDTO>();
  message: string = '';
  @Input() friendId!: number | undefined;
  showEmojiPicker: boolean = false;

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    console.log(event.target.classList);
    if (!event.target.classList.contains('emoji-icon')
    && !event.target.classList.contains('emoji-picker')) {
      console.log('clicked outside');
    this.showEmojiPicker = false;
    }
  }
  constructor(private chatStreamService: ChatStreamService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes');
  }
  showEmoji(tr:boolean) {
    this.showEmojiPicker = !this.showEmojiPicker;
  }
  sendMessage() {
    // console.log('friendId', this.friendId);
    if (this.friendId !== undefined) {
      let message = {
        sender_id: sessionStorage.getItem('session')
          ? JSON.parse(sessionStorage.getItem('session') as string).user_id
          : 0,
        receiver_id: this.friendId,
        message: this.message,
        isMe: false,
      };
      this.chatStreamService.sendMessage(message);
      let Mymessage = {
        id: 0,
        message: this.message,
        date: new Date(),
        isMe: true,
      };
      this.addMessage.emit(Mymessage);
      this.message = '';
    }
  }
  addEmoji(event: string) {
    this.message += event;
  }
}
