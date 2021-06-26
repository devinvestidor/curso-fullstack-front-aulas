import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseApp } from 'app/models/response';
import { Task } from 'app/models/task';
import { Observable } from 'rxjs';
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root',
})
export class DashService extends DefaultService {
  constructor(private http: HttpClient) {
    super('dash');
  }

  list(): Observable<ResponseApp<Task[]>> {
    return this.http.get<ResponseApp<Task[]>>(this.url);
  }
}
