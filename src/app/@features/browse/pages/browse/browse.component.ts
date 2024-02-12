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
  
  profiles: Array<Profile> = [
    {
      name: 'John Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=2541&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1601582067612-7a347874f27d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1579493934830-eab45746b51b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1536096928601-99bac26a838b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1550928323-31789f5b5d61?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'John Doe',
      profile_avatar:
        'https://unsplash.com/photos/woman-standing-near-brown-pole-GxViGxy_zpE',
      profile_location: 'London, United Kingdom',
    },
    {
      name: 'Jane Doe',
      profile_avatar:
        'https://images.unsplash.com/photo-1591431994533-c44e1854e4e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxqX19HNWQ3MHlka3x8ZW58MHx8fHx8',
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

  maxAgeChange(symbol: string) {
    // other function name than ageFilter because it's not a filter example: ageChange,
    if (symbol === '-') {
      if (this.maxAge > 18) {
        this.maxAge--;
        console.log('change age', this.maxAge);
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
        console.log(this.ageGape);
      }
    } else {
      if (this.maxAge < 100) {
        this.maxAge++;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
        console.log(this.ageGape);
      }
    }
  }
  minAgeChange(symbol: string) {
    // other function name than ageFilter because it's not a filter example: ageChange,
    if (symbol === '-') {
      if (this.minAge > 18) {
        this.minAge--;
        console.log('change age', this.minAge);
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
        console.log(this.ageGape);
      }
    } else {
      if (this.minAge < 100) {
        this.minAge++;
        this.ageGape = this.minAge.toString() + '-' + this.maxAge.toString();
        console.log(this.ageGape);
      }
    }
  }
}
