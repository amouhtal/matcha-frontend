import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
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
  @ViewChild('emojiMartComponent') emojiMartComponent!: ElementRef;
  @ViewChild('clickOnEmoji') clickOnEmoji!: ElementRef;

  message: string = '';
  @Input() friendId!: number | undefined;
  showEmojiPicker: boolean = false;
  emojiList: boolean = false;
  handleEmojiMartClick(event: Event): void {
    // Check if the click occurred inside the emoji-mart component
    // const isClickInsideEmojiMart =
    //   this.emojiMartComponent?.nativeElement?.contains(event.target);
    if (!this.emojiList) {
      // this.showEmojiPicker = false;
    }
    // console.log(isClickInsideEmojiMart);
    // if (!isClickInsideEmojiMart) {
    //   this.showEmojiPicker = false;
    // }
  }

  emojiMart(): void {
    console.log('emojiMart');
    // this.emojiList = true;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any): void {
    const clickONEmoji = this.clickOnEmoji.nativeElement.contains(event.target);
    if (clickONEmoji) {
      this.showEmojiPicker = !this.showEmojiPicker;
    } else {
      const isClickInsideEmojiMart =
        this.emojiMartComponent.nativeElement.contains(event.target);

      if (!isClickInsideEmojiMart) {
        this.showEmojiPicker = false;
        // Clicked outside the emoji-mart component, handle accordingly
      }
    }
  }

  constructor(private chatStreamService: ChatStreamService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  showEmoji(tr: boolean) {
    console.log('showEmoji');
    // this.showEmojiPicker = !this.showEmojiPicker;
  }

  sendMessage() {
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
  addEmoji(event: any) {
    this.message += event.emoji.native;
  }
}
