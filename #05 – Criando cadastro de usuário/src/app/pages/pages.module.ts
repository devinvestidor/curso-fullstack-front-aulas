import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DefaultdModule } from './default/default.module';
import { UserdModule } from './user/user.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DefaultdModule,
    UserdModule,

  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
