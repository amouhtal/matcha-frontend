import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OtherUserDto } from '../../DTO/other-user.dto';
import { CommunicationService } from 'src/app/@features/real-time-service/communication.service';

@Component({
  selector: 'matcha-other-user-page',
  templateUrl: './other-user-page.component.html',
  styleUrls: ['./other-user-page.component.scss'],
})
export class OtherUserPageComponent implements OnInit {
  mainPicture = '';
  images: string[] = [];
  user: OtherUserDto = new OtherUserDto();

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private communicationService: CommunicationService,
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params['username']) {
        this.user.username = params['username']; // Assign the value to the username variable
      }
    });
  }

  ngOnInit() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('username', this.user.username || '');

    this.http
      .get<OtherUserDto>(`http://localhost:3000/user`, {
        params: queryParams,
        withCredentials: true,
      })
      .subscribe({
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
          }
          this.userVisited();
        },
        error: (error) => {
          console.log(error.error);
        },
      });

    // .subscribe((data: OtherUserDto) => {
    //   console.log(data);
    //   if (Object.keys(data).length > 0) {
    //     this.user = data;
    //     this.mainPicture = this.user.images[0];
    //   }
    //   // this.mainPicture = data['picture'];
    // })
  }

  // function for visiting a user
  userVisited() {
    const session = JSON.parse(localStorage.getItem('session') || '');
    
    this.communicationService.emit('userVisited', {
      userId: this.user.id,
      userName: session.username,
    });
  }

  changePicture(event: any, index: number) {
    if (index < this.user.images.length) this.mainPicture = event.target['src'];
  }
}
