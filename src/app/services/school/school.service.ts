import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor(private http: HttpClient) {}

  getListOfSchool({ current_page, per_page, search }): Observable<any> {
    let params = new HttpParams()
      .set('page', current_page)
      .set('per_page', per_page)
      // .set('search', search)
      .set('sort', '-id');

    return this.http.get(`${environment.huUrl}/api/school`, {
      params: params,
    });
  }

  getSchoolById(id: any): Observable<any> {
    return this.http.get(`${environment.huUrl}/api/school/${id}`);
  }

  updateSchoolById({ payload }): Observable<any> {
    return this.http.post(`${environment.huUrl}/api/school/update`, payload);
  }

  createSchool(payload): Observable<any> {
    return this.http.post(`${environment.huUrl}/api/school`, payload);
  }
}
