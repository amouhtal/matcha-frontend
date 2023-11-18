import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PublicRoutingModule,AuthenticationModule],
})
export class PublicModule {}
