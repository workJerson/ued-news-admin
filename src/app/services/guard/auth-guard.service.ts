import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { RootState, selectUser } from 'src/app/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  user: User

  destroyed$ = new Subject()

  constructor(
    private router: Router,
    private store: Store<RootState>
  ) {
    this.store
      .pipe(select(selectUser), takeUntil(this.destroyed$))
      .subscribe((result) => {
        if (result) {
          this.user = result
        }
      })
  }

  /**
   * Check if Route can be activated
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @return {*}  {(boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>)}
   * @memberof AuthGuardService
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      let currentUser = (this.user === undefined) ? {} : this.user
      if (Object.keys(currentUser).length !== 0) {
        return resolve(true)
      } else {
        this.router.navigate(
          [
            `/auth`
          ],
          {
          }
        );
      }
    })
  }
}
