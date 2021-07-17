import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { UserService } from 'app/services/user.service';

import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TaskService } from 'app/services/task.service';
import { ThemeModule } from '../../@theme/theme.module';
import { TaskComponent } from './task.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NbCardModule,
    ThemeModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    TaskComponent,
  ],
  providers: [UserService, TaskService],

})
export class TaskModule { }
