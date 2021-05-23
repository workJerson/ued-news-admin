import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateStudentsComponent } from './update-students/update-students.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [UpdateStudentsComponent, ViewStudentsComponent],
  imports: [
    CommonModule,
    RouterModule,
    StudentsRoutingModule,
    FormsModule,
    CKEditorModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ]
})
export class StudentsModule { }
