import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { SignupFormHelper } from './signup/components/signup-form/helpers/signup-form.helper';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SignupModule,
    LoginModule,
  ],
  providers: [SignupFormHelper],
})
export class AuthenticationModule { }
