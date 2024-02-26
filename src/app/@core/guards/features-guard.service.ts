import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, lastValueFrom, of, switchMap } from 'rxjs';

@Injectable()
export class FeaturesGuardService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}
  async canActivate(): Promise<boolean> {
    console.log("checking session");

    let session = localStorage.getItem('session');
    if (session == null) return this.router.navigate(['/public/auth/login']);
    else {
      let parsedSession  : any = JSON.parse(session || '{}');
      let result =  this.http.get(`http://localhost:3000/user/checkSession?session_id=${parsedSession?.id}`, { withCredentials: true })
      let finalResult =  await lastValueFrom(result).catch((err) => {
        localStorage.removeItem('session');
        return this.router.navigate(['/public/auth/login']);
      });
      console.log(finalResult);
      if(finalResult == false){
        localStorage.removeItem('session');
        return this.router.navigate(['/public/auth/login']);
      }        
      // .get('http://localhost:3000/user/checkSession', { withCredentials: true })
       
      if (parsedSession.valid == false) {
        localStorage.removeItem('session');
        return this.router.navigate(['/public/auth/login']);
      } else return true;
    }
  }
}
