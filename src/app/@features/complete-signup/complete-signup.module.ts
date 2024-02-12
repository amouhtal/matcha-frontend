import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { CompleteSignupPageComponent } from './pages/complete-signup-page/complete-signup-page.component';
import { MatIconModule } from '@angular/material/icon';
import { CompleteSignupFormComponent } from './components/complete-signup-form/complete-signup-form.component';


@NgModule({
  declarations: [CompleteSignupPageComponent, CompleteSignupFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgOptimizedImage,
    NgxTypedJsModule,
    MatIconModule,
  ],
})
export class CompletePageModule {}
