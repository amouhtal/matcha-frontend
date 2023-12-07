import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicGuardService } from './guards/public-guard.service';
import { VerifiedGuardService } from './guards/verified-guard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [PublicGuardService,VerifiedGuardService],
})
export class CoreModule { }
