import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Post } from 'src/app/shared/intaerfaces/post';

const apiPosts = environment.apiPosts;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getPostsByUserId(id: number): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${apiPosts}/${id}`);
  };
}
