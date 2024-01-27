import { Component } from '@angular/core';

@Component({
  selector: 'matcha-verify-account-page',
  templateUrl: './verify-account-page.component.html',
  styleUrls: ['./verify-account-page.component.scss']
})
export class VerifyAccountPageComponent {
 username: string = 'new user'
  constructor() { 
    this.username = JSON.parse(localStorage.getItem('session')!).username || 'new user'
  };
}
