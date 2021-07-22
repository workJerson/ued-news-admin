import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { finalize, map, catchError, switchMap, tap, takeUntil } from 'rxjs/operators';
import { RootState, selectUser } from '../store';
import { select, Store } from '@ngrx/store';
import { SetUser } from '../store/user/user.action';
import { User } from '../models/user.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class HttpInterceptorService implements HttpInterceptor {
  currentRequestCount = 0

  user: User

  destroyed$ = new Subject()

  constructor(
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
   *
   * Injects Token
   * @param {HttpRequest<any>} request
   * @return {*}
   * @memberof HttpInterceptorService
   */
  injectToken(request: HttpRequest<any>) {
    if (this.user !== undefined) {
      const {
        access_token
      } = this.user

      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${access_token}`
        },
      });
    } else {
      return request.clone({})
    }
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // start the loading spinner here
    this.currentRequestCount++;

    return next.handle(this.injectToken(req)).pipe(
      tap((evt: any) => {
        if (evt instanceof HttpResponse) {
          // if(evt.body && evt.status === 200) {
          //   if (evt.url.includes('login')) {
          //     this.store.dispatch(new SetUser(evt.body))
          //   }
          // }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (error.url.includes("refresh")) {
            // if refresh token is also expired
            return throwError(
              'Error, please try again');
          } else {
            // if access token is expired
          }
        }
        if (error.status === 400) {
          if (error.url.includes('refresh')) {
          }
        }
        // handle http errors
        return throwError(error.error);
      }),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return event;
        }
      }),
      finalize(() => {
        this.currentRequestCount--;
        if (this.currentRequestCount === 0) {
          // hide loading spinner if all requests are done
        }
      })
    );
  }
}
