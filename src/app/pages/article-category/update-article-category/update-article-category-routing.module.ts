import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateArticleCategoryComponent } from './update-article-category.component';

const routes: Routes = [{ path: '', component: UpdateArticleCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateArticleCategoryRoutingModule { }
