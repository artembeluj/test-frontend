import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Comment } from 'src/app/shared/intaerfaces/comment';
import { Post } from 'src/app/shared/intaerfaces/post';
import { User } from 'src/app/shared/intaerfaces/user';
import { environment } from 'src/environments/environment';

const apiUsers = environment.apiUsers;
const apiPosts = environment.apiPosts;
const apiComments = environment.apiComments;

@Injectable({
  providedIn: 'root',
})
export class DataService {

  public constructor(private http: HttpClient) {};

  public getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${apiUsers}`);
  };

  public getCommentsForPosts(id: number): Observable<Comment> {
    return this.http
      .get<Comment>(`${apiComments}/${id}`);
  };

  public getUserById(id: number): Observable<User> {
    return this.http
      .get<User>(`${apiUsers}/${id}`);
  };

  public getPostsByUserId(id: number): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${apiPosts}/${id}`);
  };
}
