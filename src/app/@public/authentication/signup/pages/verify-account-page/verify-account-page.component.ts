import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'matcha-verify-account-page',
  templateUrl: './verify-account-page.component.html',
  styleUrls: ['./verify-account-page.component.scss']
})
export class VerifyAccountPageComponent {
 username: string = 'new user'
 
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      if (params["username"]) {
        this.username = params["username"]; // Assign the value to the username variable
      }
    });
  }
}
