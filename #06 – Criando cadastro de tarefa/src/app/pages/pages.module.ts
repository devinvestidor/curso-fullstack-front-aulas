import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DefaultdModule } from './default/default.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DefaultdModule,
    UserModule,
    TaskModule,

  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
