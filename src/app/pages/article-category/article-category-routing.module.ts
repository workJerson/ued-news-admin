import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleCategoryComponent } from './article-category.component';
import { CreateArticleCategoryComponent } from './create-article-category/create-article-category.component';
import { UpdateArticleCategoryComponent } from './update-article-category/update-article-category.component';

const routes: Routes = [
  { path: '', component: ArticleCategoryComponent },
  { path: 'create', component: CreateArticleCategoryComponent },
  { path: ':id', component: UpdateArticleCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleCategoryRoutingModule { }
