import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Login Authentication
   *
   * @param {*} { email, password }
   * @return {*}  {Observable<any>}
   * @memberof AuthService
   */
  login({ email, password }): Observable<any> {
    return this.http.post(`${environment.huUrl}/api/auth/login`, {
      email,
      password
    })
  }
}
