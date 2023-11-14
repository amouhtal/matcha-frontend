import { Component, OnInit } from '@angular/core';
import { ChatStreamService } from './chat.service';

@Component({
  selector: 'matcha-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  message!: string;
  constructor(private chatStreamService: ChatStreamService) {
  }

  ngOnInit(): void {
    this.chatStreamService.receiveMessage().subscribe((msg) => {
      console.log(msg);
    });
  }

  sendMessage(){
    this.chatStreamService.sendMessage(this.message);
    this.message = '';
  }
}

// SELECT public.conversation.id, last_message, is_read, username FROM conversation RIGHT JOIN users ON 
// users.id = ()