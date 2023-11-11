import { Component } from '@angular/core';

export interface MessageDTO {
  id: number;
  message: string;
  date: Date;
  isMe: boolean;
}

@Component({
  selector: 'matcha-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {
  messages: MessageDTO[] = [
    {
      id: 1,
      message: 'Hello, how are you?',
      date: new Date(),
      isMe: true
    },
    {
      id: 2,
      message: 'Hi, I am fine, thanks',
      date: new Date(),
      isMe: false
    },
    {
      id: 3,
      message: 'What about you?',
      date: new Date(),
      isMe: false
    },
    {
      id: 4,
      message: 'I am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanks,I am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanksI am fine too, thanks',
      date: new Date(),
      isMe: true
    },
    {
      id: 5,
      message: 'How is your family?',
      date: new Date(),
      isMe: true
    },
    {
      id: 6,
      message: 'They are fine too',
      date: new Date(),
      isMe: false
    },
    {
      id: 7,
      message: 'Great to hear that',
      date: new Date(),
      isMe: true
    },
    {
      id: 8,
      message: 'I am going to play football with my friends tonight',
      date: new Date(),
      isMe: false
    },
    {
      id: 9,
      message: 'That is great',
      date: new Date(),
      isMe: true
    },
    {
      id: 10,
      message: 'You should come too',
      date: new Date(),
      isMe: false
    },
    {
      id: 11,
      message: 'I am not sure',
      date: new Date(),
      isMe: true
    },
    {
      id: 12,
      message: 'Come on, it will be fun',
      date: new Date(),
      isMe: false
    },
    {
      id: 13,
      message: 'Ok, I will try',
      date: new Date(),
      isMe: true
    },
    {
      id: 14,
      message: 'Great',
      date: new Date(),
      isMe: false
    },
    {
      id: 15,
      message: 'See you later',
      date: new Date(),
      isMe: false
    },
    {
      id: 16,
      message: 'Bye',
      date: new Date(),
      isMe: true
    },
  ]
}