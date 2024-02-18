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


  profiles: Array<userProfileDTO> = [];
  constructor(
   
    private browseService: BrowseService,
  ) {}

  ngOnInit(): void {
    this.browseService
      .getSuggestionList()
      .subscribe((data: Array<userProfileDTO>) => {
        this.profiles = data;
        console.log('browservice', this.profiles);
      });
  }

  showRating() {
    this.rating = !this.rating;
    if (this.rating) {
    }
  }

  ngAfterViewInit() {
  }

}
