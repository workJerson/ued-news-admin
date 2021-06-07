import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  constructor(private http: HttpClient) {}

  createTestimonial({ first_name, last_name, testimony }): Observable<any> {
    return this.http.post(`${environment.huUrl}/api/testimonial`, {
      first_name,
      last_name,
      testimony,
    });
  }

  getListOfTestimonial({ current_page, per_page, search }): Observable<any> {
    let params = new HttpParams()
      .set('page', current_page)
      .set('per_page', per_page)
      // .set('search', search)
      .set('sort', '-id');

    return this.http.get(`${environment.huUrl}/api/testimonial`, {
      params: params,
    });
  }

  getTestimonialById(id: any): Observable<any> {
    return this.http.get(`${environment.huUrl}/api/testimonial/${id}`);
  }

  updateTestimonialById(payload): Observable<any> {
    return this.http.patch(
      `${environment.huUrl}/api/testimonial/${payload.id}`,
      payload
    );
  }
}
