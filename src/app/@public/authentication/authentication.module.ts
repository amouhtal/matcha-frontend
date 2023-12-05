import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupModule } from './signup/signup.module';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SignupModule,
    LoginModule,
  ]
})
export class AuthenticationModule { }
