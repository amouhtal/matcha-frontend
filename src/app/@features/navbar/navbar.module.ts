import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
