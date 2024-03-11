import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule } from 'ngx-socket-io';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactPanelComponent } from './components/contact-panel/contact-panel.component';
import { ConversationPanelComponent } from './components/conversation-panel/conversation-panel.component';
import { ContactComponent } from './components/contact-panel/components/contact/contact.component';
import { FriendContactComponent } from './components/conversation-panel/components/friend-contact/friend-contact.component';
import { MessagesComponent } from './components/conversation-panel/components/messages/messages.component';
import { MessageBubbleComponent } from './components/conversation-panel/components/messages/message-bubble/message-bubble.component';
import { SendMessageComponent } from './components/conversation-panel/components/send-message/send-message.component';
import { ChatStreamService } from './pages/chat/chat.service';
import { FormsModule } from '@angular/forms';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    ChatComponent,
    ContactPanelComponent,
    ConversationPanelComponent,
    ContactComponent,
    FriendContactComponent,
    MessagesComponent,
    MessageBubbleComponent,
    SendMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SocketIoModule,
    PickerComponent,

  ],
  providers: [ChatStreamService],
})
export class ChatModule {}
