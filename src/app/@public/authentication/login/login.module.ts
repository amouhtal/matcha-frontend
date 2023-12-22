import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    NgxTypedJsModule,

  ],
})
export class LoginModule {}
