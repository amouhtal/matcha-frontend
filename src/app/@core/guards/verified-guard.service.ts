import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';

@Injectable()
export class VerifiedGuardService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log(sessionStorage.getItem('session'));
    if (sessionStorage.getItem('session') != null) {
      let session = JSON.parse(sessionStorage.getItem('session') || '{}');
      return this.http
        .post(
          'http://localhost:3000/user/getVerification',
          { id: session.user_id },
          { withCredentials: true },
        )
        .pipe(
          switchMap((res: any) => {
            if (res.verified == true) {
              this.router.navigate(['/']);
              return of(true);
            } else {
              this.router.navigate(['/public/auth/verify']);
              return of(false);
            }
          }),
        );
    } else {
      this.router.navigate(['/public/auth/login']);
      return false;
    }
  }
}
