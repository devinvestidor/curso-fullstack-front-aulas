import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApp } from 'app/models/response';
import { User } from 'app/models/user';
import { Observable } from 'rxjs';
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends DefaultService {
  constructor(private http: HttpClient) {
    super('user');
  }

  list(): Observable<ResponseApp<User[]>> {
    return this.http.get<ResponseApp<User[]>>(this.url);
  }

  findById(id: string): Observable<ResponseApp<User>> {
    return this.http.get<ResponseApp<User>>(`${this.url}/${id}`);
  }

  create(user: User): Observable<ResponseApp<User>> {
    return this.http.post<ResponseApp<User>>(this.url, user);
  }

  edit(user: User): Observable<ResponseApp<User>> {
    return this.http.put<ResponseApp<User>>(`${this.url}/${user._id}`, user);
  }

  delete(id: String): Observable<ResponseApp<User>> {
    return this.http.delete<ResponseApp<User>>(`${this.url}/${id}`);
  }
}
