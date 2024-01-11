import { AfterViewInit, Component, ElementRef } from '@angular/core';

interface Profile {
  profile_avatar: string;
  name: string;
  profile_location: string;
}
@Component({
  selector: 'matcha-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements AfterViewInit {
  rating: boolean = false;
  rateValue: number = 0;
  profiles: Array<Profile> = [
    {
      name: 'John Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://xsgames.co/randomusers/assets/avatars/pixel/31.jpg',
      profile_location: 'London, United Kingdom',
    },
  ];
  hearts!: any;
  constructor(private starsElements: ElementRef) {}

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
    console.log('heart', this.hearts);
    for (let i = 0; i < index; i++) {
      this.hearts[i].classList.add('heart--active');
    }
    this.rateValue = index;
  }
}
