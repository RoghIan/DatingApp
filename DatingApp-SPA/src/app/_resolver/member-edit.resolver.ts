import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../_model/user.model';
import { UserService } from '../_service/user.service';
import { AlertifyService } from '../_service/alerifyjs.service';
import { AuthService } from '../_service/auth.service';

@Injectable({ providedIn: 'root' })
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService,
    private authService: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError((error) => {
        this.alertify.error('Problem retreiving your data');
        this.router.navigate(['/member']);
        return of(null);
      })
    );
  }
}
