import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleCategoryService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get List of article categories
   *
   * @param {*} {current_page, per_page, search}
   * @returns {Observable<any>}
   * @memberof UserService
   */
  getArticleCategoryList({current_page, per_page, search}): Observable<any> {
    let params = new HttpParams()
    .set('page', current_page)
    .set('per_page', per_page)
    .set('sort', '-id')

    return this.http.get(`${environment.huUrl}/api/article-categories`, {
      params: params
    });
  }

  /**
   * Create new Article Category
   *
   * @param {*} {name, description}
   * @returns {Observable<any>}
   * @memberof UserService
   */
  createArticleCategory({name, description}): Observable<any>
  {
    return this.http.post(`${environment.huUrl}/api/article-categories`, {
      name, description
    });
  }

  /**
   * Get article category by id
   *
   * @param {*} id
   * @returns {Observable<any>}
   * @memberof ArticleCategoryService
   */
  getArticleCategoryById(id: any): Observable<any>
  {
    return this.http.get(`${environment.huUrl}/api/article-categories/${id}`)
  }

  /**
   * Update Article Category by id
   *
   * @param {*} payload
   * @returns {Observable<any>}
   * @memberof ArticleCategoryService
   */
  updateArticleCategoryById(payload: any): Observable<any>
  {
    return this.http.patch(`${environment.huUrl}/api/article-categories/${payload.id}`, payload)
  }

  /**
   * Delete article category by id
   *
   * @param {*} id
   * @returns {Observable<any>}
   * @memberof ArticleCategoryService
   */
  deleteArticleCategoryById(id: any): Observable<any> {
    return this.http.delete(`${environment.huUrl}/api/article-categories/${id}`)
  }
}
