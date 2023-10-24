import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class testGuard implements CanActivate {
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return true;
  }
  
}
