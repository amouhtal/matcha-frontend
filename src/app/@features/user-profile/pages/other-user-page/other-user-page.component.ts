import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtherUserDto } from '../../DTO/other-user.dto';
import { UserApiService } from 'src/app/@api/services/user/user-api.service';

@Component({
  selector: 'matcha-other-user-page',
  templateUrl: './other-user-page.component.html',
  styleUrls: ['./other-user-page.component.scss'],
})
export class OtherUserPageComponent implements OnInit {
  mainPicture = '';
  images: string[] = [];
  user: OtherUserDto = new OtherUserDto();
  hearthHover = 0;
  rating = 0;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private userApiService: UserApiService,
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params['username']) {
        this.user.username = params['username']; // Assign the value to the username variable
      }
    });
  }

  ngOnInit() {
    this.userApiService.getUser(this.user.username).subscribe({
      next: (ret) => {
        this.user = ret;
        if (this.user && Object.keys(this.user).length > 0) {
          this.mainPicture = this.user.images[0];
          this.user.birthdate = new Date(this.user.birthdate);
          let i = 0;
          for (i; i < this.user.images.length; i++) {
            this.images.push(this.user.images[i]);
          }
          if (i < 5) {
            for (i; i < 5; i++) {
              this.images.push(
                '../../../../../assets/images/missing picture4.png',
              );
            }
          }
          this.user.rating = 4;
        }
      },
      error: (error) => {
        console.log(error.error);
      },
    });
  }

  changePicture(event: any, index: number) {
    if (index < this.user.images.length) this.mainPicture = event.target['src'];
  }
  match() {
    console.log('match');
  }
  ratingHover(rating: number) {
    if (this.rating === 0) this.hearthHover = rating;
  }
  rateProfile(rating: number) {
    this.rating = 1;
    this.hearthHover = rating;
    console.log('rating', rating);
  }
}
