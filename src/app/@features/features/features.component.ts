import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import {
  faTwitter,
  faFacebookF,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { RealTimeNotificationService } from '../notifications/pages/real-time-notification.service';
import { Store } from '@ngrx/store';
import { IContactsState } from '../chat/local-store/reducers/contact.reducer';
import * as contactActions from '../chat/local-store/actions/contact.action';
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

  constructor(
    private router: Router,
    private store: Store<{
      clickContact: boolean;
      contactState: IContactsState;
    }>,
    private realTimeNotificationService: RealTimeNotificationService,
  ) {
    this.realTimeNotificationService.listenForProfileViews();
    this.realTimeNotificationService.listenForProfileLikes();
    this.realTimeNotificationService.listenForLikeBacks();
    this.realTimeNotificationService.listenForUnlikes();
    this.store.dispatch(contactActions.getContactsAction())
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe((event: NavigationEnd) => {
        this.hideNavBar = event.url.includes('/complete-signup');
      });
  }
}
