import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TestimonialRoutingModule } from './testimonial-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TestimonialRoutingModule,
    FormsModule,
    CKEditorModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class TestimonialModule {}
