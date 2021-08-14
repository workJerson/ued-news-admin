import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  /**
   * Get List of Dashboard Items
   *
   * @return {*}  {Observable<any>}
   * @memberof DashboardService
   */
  getDashboardItems(): Observable<any> {
    return this.http.get(`${environment.huUrl}/api/dashboard`);
  }
}
