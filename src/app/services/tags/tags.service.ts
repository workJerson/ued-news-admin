import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get List of Tags
   *
   * @param {string} [params]
   * @returns {Observable<any>}
   * @memberof TagsService
   */
  getTagsList({current_page, per_page, search}): Observable<any> {
    let params = new HttpParams()
    .set('page', current_page)
    .set('per_page', per_page)
    .set('sort', '-id')
    .set('search', search)

    return this.http.get(`${environment.huUrl}/api/tags?${params}`)
  }
  getAllTagsList(): Observable<any>{

    return this.http.get(`${environment.huUrl}/api/tags`)
  }
  /**
   * Create new Tag record
   *
   * @param {*} payload
   * @returns {Observable<any>}
   * @memberof TagsService
   */
  createTag(payload:any): Observable<any> {
    return this.http.post(`${environment.huUrl}/api/tags`, payload)
  }

  /**
   * Get Tag by Id
   *
   * @param {*} id
   * @returns {Observable<any>}
   * @memberof TagsService
   */
  getTagById(id: any): Observable<any>{
    return this.http.get(`${environment.huUrl}/api/tags/${id}`)
  }

  /**
   * Update Tag by Id
   *
   * @param {*} payload
   * @returns {Observable<any>}
   * @memberof TagsService
   */
  updateTagById(payload:any): Observable<any> {
    return this.http.patch(`${environment.huUrl}/api/tags/${payload?.id}`, payload)
  }

  /**
   * Delete Tag by id
   *
   * @param {*} id
   * @returns {Observable<any>}
   * @memberof TagsService
   */
  deleteTagById(id:any): Observable<any> {
    return this.http.delete(`${environment.huUrl}/api/tags/${id}`)
  }
}
