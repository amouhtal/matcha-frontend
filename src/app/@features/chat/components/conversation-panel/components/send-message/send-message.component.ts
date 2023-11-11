import { Component } from '@angular/core';

@Component({
  selector: 'matcha-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent {
  message!: string;

  constructor() { }

  sendMessage(){
    
  }
}
