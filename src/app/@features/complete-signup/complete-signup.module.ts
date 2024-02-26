
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule from Angular Material
import { CompleteSignupPageComponent } from './pages/complete-signup-page/complete-signup-page.component';
import { CompleteSignupFormComponent } from './components/complete-signup-form/complete-signup-form.component';

@NgModule({
  declarations: [CompleteSignupPageComponent, CompleteSignupFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxTypedJsModule,
    MatIconModule, // Add MatIconModule to the imports array
  ],
})
export class CompletePageModule {}
