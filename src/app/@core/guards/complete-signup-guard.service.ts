import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Injectable()
export class CompleteSignupGuardService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log(localStorage.getItem('session'));
    if (localStorage.getItem('session') != null) {
      let session = JSON.parse(localStorage.getItem('session') || '{}');
      return this.http
        .post(
          'http://localhost:3000/user/completeSignupStatus',
          {},
          { withCredentials: true },
        )
        .pipe(
          switchMap((res: any) => {
            if (res.signCompleteStatus == true) {
              this.router.navigate(['/']);
              return of(false);
            }
            return of(true);
          }),
        );
    } else {
      this.router.navigate(['/public/auth/login']);
      return false;
    }
  }
}
