import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChatStreamService } from 'src/app/@features/chat/pages/chat/chat.service';

@Component({
  selector: 'matcha-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
})
export class SendMessageComponent implements OnChanges {
  message!: string;
  @Input() friendId!: number;
  constructor(private chatStreamService: ChatStreamService) {}

  ngOnChanges(changes: SimpleChanges): void {
      console.log('changes');
  }
  sendMessage() {
    const message = {
      sender_id: 1,
      receiver_id: this.friendId,
      message: this.message
    }
    this.chatStreamService.sendMessage(message);
    this.message = '';
  }
}
