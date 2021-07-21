import { HttpClient } from '@angular/common/http';
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

  getTagsList(params?: string): Observable<any> {
    return this.http.get(`${environment.huUrl}/api/tags?${params}`)
  }
}
