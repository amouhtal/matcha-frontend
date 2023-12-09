import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'matcha-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  notificationCount = 0;
  counter$: Observable<number> = this.store.select("notification");
  constructor(private store: Store<{ notification: number }>,private router: Router) {}

  Messages() {
    this.router.navigate(['/features/chat']);
  }
  Likers() {
    this.router.navigate(['/features/']);
  }
}
