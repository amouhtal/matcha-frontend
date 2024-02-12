import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerifyAccountPageComponent } from './pages/verify-account-page/verify-account-page.component';
import { NgOptimizedImage } from '@angular/common'
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    SignupPageComponent,
    SignupFormComponent,
    VerifyAccountPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    NgxTypedJsModule,
    RouterModule
  ]
})
export class SignupModule { }
