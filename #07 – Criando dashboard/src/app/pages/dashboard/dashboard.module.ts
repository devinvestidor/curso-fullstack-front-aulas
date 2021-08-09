import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

import { DashService } from 'app/services/dash.service';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [DashService],

})
export class DashboardModule { }
