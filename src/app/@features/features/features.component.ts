import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import {
  faTwitter,
  faFacebookF,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'matcha-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagramSquare = faInstagramSquare;
  hideNavBar: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.hideNavBar = event.url.includes('/complete-signup');
    });
  }
}
