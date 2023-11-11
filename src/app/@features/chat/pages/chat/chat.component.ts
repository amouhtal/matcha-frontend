import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'matcha-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  message!: string;
  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    this.chatService.receiveMessage().subscribe((msg) => {
      console.log(msg);
    });
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
}
