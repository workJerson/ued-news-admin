import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SchoolRoutingModule } from './school-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    SchoolRoutingModule,
    FormsModule,
    CKEditorModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class SchoolModule {}
