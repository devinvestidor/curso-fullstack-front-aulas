import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { idUserLogged } from 'app/app.component';
import { ResponseApp } from 'app/models/response';
import { Task, TaskFilterEnum } from 'app/models/task';
import { Observable } from 'rxjs';
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends DefaultService {
  constructor(private http: HttpClient) {
    super('task');
  }

  list(taskFilterEnum: TaskFilterEnum): Observable<ResponseApp<Task[]>> {
    return this.http.get<ResponseApp<Task[]>>(`${this.url}/${taskFilterEnum}/${idUserLogged}`);
  }

  findById(id: string): Observable<ResponseApp<Task>> {
    return this.http.get<ResponseApp<Task>>(`${this.url}/${id}`);
  }

  create(task: Task): Observable<ResponseApp<Task>> {
    return this.http.post<ResponseApp<Task>>(this.url, task);
  }

  edit(task: Task): Observable<ResponseApp<Task>> {
    return this.http.put<ResponseApp<Task>>(`${this.url}/${task._id}`, task);
  }

  delete(id: String): Observable<ResponseApp<Task>> {
    return this.http.delete<ResponseApp<Task>>(`${this.url}/${id}`);
  }
}
