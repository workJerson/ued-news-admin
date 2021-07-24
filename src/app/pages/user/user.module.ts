import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [UserComponent, UpdateUserComponent, CreateUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxSpinnerModule
  ]
})
export class UserModule { }
