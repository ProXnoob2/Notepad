import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.user$
      .pipe(switchMap((user: any) => this.userService.get(user?.uid).valueChanges()))
      .pipe(map((appUser: any) => appUser?.isAdmin))
  }
}
