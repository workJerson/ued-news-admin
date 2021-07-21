import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleCategoryRoutingModule } from './article-category-routing.module';
import { ArticleCategoryComponent } from './article-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [ArticleCategoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    ArticleCategoryRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class ArticleCategoryModule { }
