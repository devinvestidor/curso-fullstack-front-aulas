import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

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

})
export class DefaultdModule { }
