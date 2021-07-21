import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {

    /**
     * Get List of Users
     *
     * @param {*} {current_page, per_page}
     * @returns {Observable<any>}
     */
    function getUserList({current_page, per_page}): Observable<any> {
      let params = new HttpParams()
      .set('page', current_page)
      .set('per_page', per_page)
      // .set('search', search)
      .set('sort', '-id')

      return this.http.get(`${environment.huUrl}/api/users`, {
        params: params
      });
    }

    /**
     * Create new User
     *
     * @param {*} payload
     * @returns {Observable<any>}
     */
    function createUser(payload:any): Observable<any> {
      return this.http.post(`${environment.huUrl}/api/users`, payload)

    }

    /**
     * Get User by Id
     *
     * @param {*} id
     * @returns {Observable<any>}
     */
    function getUserById(id:any): Observable<any> {
      return this.http.get(`${environment.huUrl}/api/users/${id}`)
    }

    /**
     * Update User by Id
     *
     * @param {*} payload
     * @returns {Observable<any>}
     */
    function updateUserById(payload:any): Observable<any> {
      return this.http.patch(`${environment.huUrl}/api/users/${payload.id}`, payload)
    }

    /**
     * Delete User By Id
     *
     * @param {*} id
     * @returns {Observable<any>}
     */
    function deleteUserById(id:any): Observable<any> {
      return this.http.delete(`${environment.huUrl}/api/users/${id}`)
    }
  }
}
