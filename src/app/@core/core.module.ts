import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicGuardService } from './guards/public-guard.service';
import { VerifiedGuardService } from './guards/verified-guard.service';
import { FeaturesGuardService } from './guards/features-guard.service';
import { CompleteSignupGuardService } from './guards/complete-signup-guard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [PublicGuardService,VerifiedGuardService,FeaturesGuardService,CompleteSignupGuardService],
})
export class CoreModule { }
