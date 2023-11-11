import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactPanelComponent } from './components/contact-panel/contact-panel.component';
import { ConversationPanelComponent } from './components/conversation-panel/conversation-panel.component';
import { ContactComponent } from './components/contact-panel/components/contact/contact.component';
import { FriendContactComponent } from './components/conversation-panel/components/friend-contact/friend-contact.component';
import { MessagesComponent } from './components/conversation-panel/components/messages/messages.component';
import { MessageBubbleComponent } from './components/conversation-panel/components/messages/message-bubble/message-bubble.component';
import { SendMessageComponent } from './components/conversation-panel/components/send-message/send-message.component';
import { ChatService } from './pages/chat/chat.service';
import { FormsModule } from '@angular/forms';



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
  imports: [CommonModule, ChatRoutingModule, FormsModule],
  providers: [ChatService],
})
export class ChatModule {}
