import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateArticleCategoryComponent } from './create-article-category.component';

const routes: Routes = [{ path: '', component: CreateArticleCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateArticleCategoryRoutingModule { }
