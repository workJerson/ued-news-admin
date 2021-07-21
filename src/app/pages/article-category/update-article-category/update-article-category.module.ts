import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateArticleCategoryRoutingModule } from './update-article-category-routing.module';
import { UpdateArticleCategoryComponent } from './update-article-category.component';


@NgModule({
  declarations: [UpdateArticleCategoryComponent],
  imports: [
    CommonModule,
    UpdateArticleCategoryRoutingModule
  ]
})
export class UpdateArticleCategoryModule { }
