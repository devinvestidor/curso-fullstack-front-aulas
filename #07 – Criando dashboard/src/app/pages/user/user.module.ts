import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { UserService } from 'app/services/user.service';

import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NbCardModule,
    ThemeModule,
    Ng2SmartTableModule,

  ],
  declarations: [
    UserComponent,
  ],
  providers: [UserService],

})
export class UserModule { }
