import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/intaerfaces/user';

const apiUsers = environment.apiUsers;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${apiUsers}`);
  };

  public getUserById(id: number): Observable<User> {
    return this.http
      .get<User>(`${apiUsers}/${id}`);
  };
}
