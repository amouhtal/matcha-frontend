import { Component, Input } from '@angular/core';
import { MessageDTO } from '../messages.component';

@Component({
  selector: 'matcha-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss'],
})
export class MessageBubbleComponent {

  @Input() message!: MessageDTO;
  
  constructor() {}
}
