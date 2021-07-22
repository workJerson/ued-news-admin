import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleCategoryRoutingModule } from './article-category-routing.module';
import { ArticleCategoryComponent } from './article-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CreateArticleCategoryComponent } from './create-article-category/create-article-category.component';


@NgModule({
  declarations: [ArticleCategoryComponent, CreateArticleCategoryComponent],
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
