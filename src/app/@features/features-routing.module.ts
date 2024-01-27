import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompleteSignupPageComponent } from "./complete-signup/pages/complete-signup-page/complete-signup-page.component";
import { CompleteSignupGuardService } from "../@core/guards/complete-signup-guard.service";

const routes: Routes = [
    {
      path: 'complete-signup',
      component: CompleteSignupPageComponent,
      canActivate: [CompleteSignupGuardService],
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

export class FeaturesRoutingModule {}