import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get List of News Categories
   *
   * @return {*}  {Observable<any>}
   * @memberof ArticleService
   */
  getNewsCategories(): Observable<any> {
    return this.http.get(`${environment.huUrl}/api/article-categories`)
  }

  /**
   * Create New News
   *
   * @param {*} { title, news_category_id, description}
   * @return {*}  {Observable<any>}
   * @memberof ArticleService
   */
   createArticle({ header, video_path, thumbnail_path, body, article_category_id, tag_ids }): Observable<any> {
    return this.http.post(`${environment.huUrl}/api/articles`, {
      header,
      video_path,
      thumbnail_path,
      body,
      article_category_id,
      tag_ids,
    })
  }

  /**
   * Get List Of News
   *
   * @param {*} { current_page, per_page, search }
   * @return {*}  {Observable<any>}
   * @memberof ArticleService
   */
  getListOfNews({ current_page, per_page, search }): Observable<any> {
    let params = new HttpParams()
      .set('page', current_page)
      .set('per_page', per_page)
      // .set('search', search)
      .set('sort', '-id')

    return this.http.get(`${environment.huUrl}/api/articles?with=category,creator,tags`, {
      params: params
    });
  }

  /**
   * Get News By Id
   *
   * @param {*} id
   * @return {*}  {Observable<any>}
   * @memberof ArticleService
   */
  getNewsById(id: any): Observable<any> {
    return this.http.get(`${environment.huUrl}/api/articles/${id}`)
  }

  /**
   * Update News By ID
   *
   * @param {*} payload
   * @return {*}  {Observable<any>}
   * @memberof ArticleService
   */
  updateNewsById(payload): Observable<any> {
    return this.http.patch(`${environment.huUrl}/api/articles/${payload.id}`, payload)
  }
}
