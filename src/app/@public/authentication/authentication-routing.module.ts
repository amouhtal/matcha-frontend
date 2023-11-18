import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup/pages/signup-page/signup-page.component';
import { VerifyAccountPageComponent } from './signup/pages/verify-account-page/verify-account-page.component';

const routes: Routes = [
  {path: "signup" , component: SignupPageComponent},
  {path: "verify" , component: VerifyAccountPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
