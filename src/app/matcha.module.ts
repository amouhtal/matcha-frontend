import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatchaRoutingModule } from './matcha-routing.module';
import { MatchaComponent } from './matcha.component';
import { ChatModule } from './@features/chat/chat.module';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = { url: environment.socketUrl, options: {} };
@NgModule({
  declarations: [MatchaComponent],
  imports: [
    BrowserModule,
    MatchaRoutingModule,
    ChatModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [MatchaComponent],
})
export class MatchaModule {}
