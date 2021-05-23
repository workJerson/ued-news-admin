import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get List of News Categories
   *
   * @return {*}  {Observable<any>}
   * @memberof NewsService
   */
  getNewsCategories(): Observable<any> {
    return this.http.get(`${environment.huUrl}/api/news-category`)
  }

  /**
   * Create New News
   *
   * @param {*} { title, news_category_id, description}
   * @return {*}  {Observable<any>}
   * @memberof NewsService
   */
  createNews({ title, news_category_id, description }): Observable<any> {
    return this.http.post(`${environment.huUrl}/api/news`, {
      title,
      news_category_id,
      description
    })
  }

  /**
   * Get List Of News
   *
   * @param {*} { current_page, per_page, search }
   * @return {*}  {Observable<any>}
   * @memberof NewsService
   */
  getListOfNews({ current_page, per_page, search }): Observable<any> {
    let params = new HttpParams()
      .set('page', current_page)
      .set('per_page', per_page)
      // .set('search', search)
      .set('sort', '-id')

    return this.http.get(`${environment.huUrl}/api/news`, {
      params: params
    });
  }

  /**
   * Get News By Id
   *
   * @param {*} id
   * @return {*}  {Observable<any>}
   * @memberof NewsService
   */
  getNewsById(id: any): Observable<any> {
    return this.http.get(`${environment.huUrl}/api/news/${id}`)
  }

  /**
   * Update News By ID
   *
   * @param {*} payload
   * @return {*}  {Observable<any>}
   * @memberof NewsService
   */
  updateNewsById(payload): Observable<any> {
    return this.http.patch(`${environment.huUrl}/api/news/${payload.id}`, payload)
  }
}
