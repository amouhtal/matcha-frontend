import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { BrowseService } from 'src/app/@api/services/browse/browse.service';

// interface Profile {
//   first_name: string;
//   last_name: string;
//   images: string[];
//   profile_location: string;
//   email_address: string;
//   is_online: boolean;
//   sexual_preference: 'male' | 'female';
//   latitude: string;
//   longitude: string;
// }

export interface userProfileDTO {
  id?: number;
  first_name: string;
  last_name: string;
  images: string[];
  profile_location: string;
  email_address: string;
  password: string;
  username: string;
  is_online: boolean;
  sexual_preference: string;
  latitude: string;
  longitude: string;
  biography: string;
  gender: string;
  tags: string[];
  birthdate: string;
  verified: boolean;
  fame_rating: number[];
  profile_completion_status: boolean;
}
@Component({
  selector: 'matcha-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements AfterViewInit, OnInit {
  rating: boolean = false;
  rateValue: number = 0;
  minAge: number = 18;
  maxAge: number = 100;
  ageGape: string = '18 - 100';
  private clickInterval: any;

  startDecrementing(symbol: string) {
    this.clickInterval = setInterval(() => {
      this.minAgeChange(symbol);
    }, 50); // Adjust the interval as needed
  }

  startIncrementingMax(symbol: string) {
    this.clickInterval = setInterval(() => {
      this.maxAgeChange(symbol);
    }, 50); // Adjust the interval as needed
  }

  stopIncrementing() {
    clearInterval(this.clickInterval);
  }

  profiles: Array<userProfileDTO> = [

  ];
  hearts!: any;
  constructor(
    private starsElements: ElementRef,
    private browseService: BrowseService,
  ) {}

  ngOnInit(): void {
    this.browseService
      .getSuggestionList()
      .subscribe((data: Array<userProfileDTO>) => {
        this.profiles = data;
      });
  }

  showRating() {
    this.rating = !this.rating;
    if (this.rating) {
    }
  }

  ngAfterViewInit() {
    this.hearts = this.starsElements.nativeElement.querySelectorAll('.heart');
  }
  rate(index: number) {
    this.hearts.forEach((heart: any) => {
      heart.classList.remove('heart--active');
    });
    for (let i = 0; i < index; i++) {
      this.hearts[i].classList.add('heart--active');
    }
    this.rateValue = index;
  }

  maxAgeChange(symbol: string) {
    // other function name than ageFilter because it's not a filter example: ageChange,
    if (symbol === '-') {
      if (this.maxAge > 18) {
        this.maxAge--;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
      }
    } else {
      if (this.maxAge < 100) {
        this.maxAge++;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
      }
    }
  }
  minAgeChange(symbol: string) {
    // other function name than ageFilter because it's not a filter example: ageChange,
    if (symbol === '-') {
      if (this.minAge > 18) {
        this.minAge--;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
      }
    } else {
      if (this.minAge < 100) {
        this.minAge++;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
      }
    }
  }
}
