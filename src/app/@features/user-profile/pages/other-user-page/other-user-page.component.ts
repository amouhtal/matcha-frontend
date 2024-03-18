import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtherUserDto } from '../../DTO/other-user.dto';
import { UserApiService } from 'src/app/@api/services/user/user-api.service';
import { MatchsApiService } from 'src/app/@api/services/matchs/matchs-api.service';

@Component({
  selector: 'matcha-other-user-page',
  templateUrl: './other-user-page.component.html',
  styleUrls: ['./other-user-page.component.scss'],
})
export class OtherUserPageComponent implements OnInit {
  mainPicture = '';
  images: string[] = [];
  user: OtherUserDto = new OtherUserDto();
  userStatus = 'unmatched';
  hearthHover = 0;
  rating?: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userApiService: UserApiService,
    private matchsApiService: MatchsApiService,
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
        console.log(ret);
        this.user = ret.user;
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
          if (ret.rating.exist) {
            this.rating = 1;
            this.hearthHover = ret.rating.rating;
          }
          // this.user.rating = 4;
          this.matchsApiService
            .getMatchStatus({ reciverId: this.user.id })
            .subscribe({
              next: (ret: any) => {
                this.userStatus = ret.message;
              },
              error: (error) => {
                console.log(error.error);
              },
            });
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
    this.matchsApiService
      .sendMatchRequest({ reciverId: this.user.id })
      .subscribe({
        next: (ret: any) => {
          if (ret.message === 'user matched') {
            this.userStatus = 'matched';
          } else if (ret.message === 'match request sent') {
            this.userStatus = 'pending';
          }
          console.log(ret);
        },
        error: (error) => {
          console.log(error.error);
        },
      });
    console.log('match');
  }
  cancelMatch() {
    this.matchsApiService
      .cancelMatchRequest({ reciverId: this.user.id })
      .subscribe({
        next: (result: any) => {
          if (result.message != 'no match') {
            this.userStatus = 'unmatched';
          }
        },
        error: (error) => {
          console.log(error.error);
        },
      });
  }

  ratingHover(rating: number) {
    if (this.rating === 0) this.hearthHover = rating;
  }

  rateProfile(rating: number) {
    this.rating = 1;
    this.hearthHover = rating;
    this.userApiService
      .rateUser({ rated_user_id: this.user.id, rating })
      .subscribe({
        next: (result: any) => {
          console.log('rate user called' , result);
        },
        error: (error) => {
          console.log(error.error);
        },
      });
  }
}
