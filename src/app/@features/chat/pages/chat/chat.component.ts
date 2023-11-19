import { Component, OnInit } from '@angular/core';
import { ChatStreamService } from './chat.service';

@Component({
  selector: 'matcha-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  message!: string;
  contact!: any;
  constructor(private chatStreamService: ChatStreamService) {}

  ngOnInit(): void {
    this.chatStreamService.receiveMessage().subscribe((msg) => {
      console.log(msg);
    });
  }

  sendMessage() {
    this.chatStreamService.sendMessage(this.message);
    this.message = '';
  }

  changeContact(contact: any) {
    this.contact = contact;
  }
}
