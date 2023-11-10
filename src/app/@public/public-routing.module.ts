import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from '../@features/authentication/signup/pages/signup-page/signup-page.component';
import { SignupFormComponent } from '../@features/authentication/signup/components/signup-form/signup-form.component';

const routes: Routes = [
    {path: "public" , component : SignupFormComponent},
    {path: "public/signup" , component : SignupPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
