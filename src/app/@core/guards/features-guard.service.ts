import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class FeaturesGuardService {
  constructor(private router: Router) {}
  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    let sesssion = localStorage.getItem('session');
    if (sesssion == null) return this.router.navigate(['/public/auth/login']);
    else {
      if (JSON.parse(sesssion).valid == false) {
        localStorage.removeItem('session');
        return this.router.navigate(['/public/auth/login']);
      } else return true;
    }
  }
}
