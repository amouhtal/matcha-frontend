import { Component } from '@angular/core';
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
export class FeaturesComponent {
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagramSquare = faInstagramSquare;
}
