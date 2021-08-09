import { Params } from '@angular/router';
import { User } from './user';

export enum StatusEnum {
    OPEN = 'OPEN',
    FINISHED = 'FINISHED'
}

export class Task {
    _id: string;
    description: string;
    status: StatusEnum;
    statusTranslate: string;
    concluded: Date;
    responsible: User;
    responsibleName: string;
    creation: Date;

    constructor(task: Task) {
      this._id = task._id;
      this.description = task.description;
      this.responsibleName = task.responsible.name;

      if (StatusEnum.OPEN === task.status) this.statusTranslate = 'Em aberto';
      else this.statusTranslate = 'Finalizado';
    }
}

export enum TaskFilterEnum {
    MY,
    OPENED,
    FINISHED,
    ALL
}

export class TaskFilter {
  title: string;
  link = '/pages/task/';
  queryParams: Params;

  constructor(title: string, filter: TaskFilterEnum) {
    this.title = title;
    this.queryParams = { filter };
  }
}
