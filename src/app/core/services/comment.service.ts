import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Comment } from 'src/app/shared/intaerfaces/comment';
import { environment } from 'src/environments/environment';

const apiComments = environment.apiComments;

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  public constructor(private http: HttpClient) {};

  public getCommentsForPosts(id: number): Observable<Comment> {
    return this.http
      .get<Comment>(`${apiComments}/${id}`);
  };
}
