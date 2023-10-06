import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { UserRole } from '../services/user-roles';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.getRole() !== UserRole.anonymous) {
      return true;
    }  
    this.router.navigate(['/home']);
    return false;
  }
  
}
