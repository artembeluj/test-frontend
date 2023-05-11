import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const api = environment.apiUsers;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public constructor(private http: HttpClient) { };

  public uploadPhoto(formData: FormData, id: number): Observable<any> {
    return this.http.post(`${api}/${id}/photo`, formData)
  }
}
