import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { ChatModule } from './chat/chat.module';
import { NavbarModule } from './navbar/navbar.module';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ChatModule,
    NavbarModule,
  ],
  bootstrap: [FeaturesComponent],
})
export class FeaturesModule { }
