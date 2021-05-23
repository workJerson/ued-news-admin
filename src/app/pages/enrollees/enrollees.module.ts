import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEnrolleeComponent } from './view-enrollee/view-enrollee.component';
import { CreateEnrolleeComponent } from './create-enrollee/create-enrollee.component';
import { UpdateEnrolleeComponent } from './update-enrollee/update-enrollee.component';
import { EnrolleesRoutingModule } from './enrollees-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [ViewEnrolleeComponent, CreateEnrolleeComponent, UpdateEnrolleeComponent],
  imports: [
    CommonModule,
    RouterModule,
    EnrolleesRoutingModule,
    FormsModule,
    CKEditorModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ]
})
export class EnrolleesModule { }
