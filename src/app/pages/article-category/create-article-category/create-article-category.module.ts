import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateArticleCategoryRoutingModule } from './create-article-category-routing.module';
import { CreateArticleCategoryComponent } from './create-article-category.component';


@NgModule({
  declarations: [CreateArticleCategoryComponent],
  imports: [
    CommonModule,
    CreateArticleCategoryRoutingModule
  ]
})
export class CreateArticleCategoryModule { }
