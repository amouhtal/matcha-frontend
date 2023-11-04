import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactPanelComponent } from './components/contact-panel/contact-panel.component';
import { ConversationPanelComponent } from './components/conversation-panel/conversation-panel.component';
import { ContactComponent } from './components/contact-panel/components/contact/contact.component';

@NgModule({
  declarations: [
    ChatComponent,
    ContactPanelComponent,
    ConversationPanelComponent,
    ContactComponent,
  ],
  imports: [CommonModule, ChatRoutingModule],
})
export class ChatModule {}
