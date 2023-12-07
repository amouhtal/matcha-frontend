import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class  PublicGuardService  {
    constructor(private router: Router) {}
    canActivate() : boolean | Observable<boolean> | Promise<boolean> {
        if(sessionStorage.getItem('session') == null)
        return true;
        else
        return this.router.navigate(['/']);
    }
}