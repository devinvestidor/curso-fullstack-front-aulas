import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

import { UserService } from 'app/services/user.service';
import { TaskService } from 'app/services/task.service';
import { DashService } from 'app/services/dash.service';
import { ThemeModule } from '../../@theme/theme.module';
import { DefaultComponent } from './default.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  declarations: [
    DefaultComponent,
  ],
  providers: [UserService, TaskService, DashService],

})
export class DefaultdModule { }
