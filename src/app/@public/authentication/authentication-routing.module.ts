import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './signup/pages/signup-page/signup-page.component';
import { VerifyAccountPageComponent } from './signup/pages/verify-account-page/verify-account-page.component';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';
import { PublicGuardService } from 'src/app/@core/guards/public-guard.service';
import { VerifiedGuardService } from 'src/app/@core/guards/verified-guard.service';

const routes: Routes = [
  {path: "signup" , component: SignupPageComponent , canActivate: [PublicGuardService ],},
  {path: "login" , component: LoginPageComponent , canActivate: [PublicGuardService],},
  {path: "verify" , component: VerifyAccountPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
