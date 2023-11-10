import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupModule } from './signup/signup.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SignupModule
  ]
})
export class AuthenticationModule { }
