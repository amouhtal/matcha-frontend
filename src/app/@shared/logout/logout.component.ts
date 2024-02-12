import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'matcha-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('session');
    this.router.navigate(["/public/auth/login"]);
  }
}
