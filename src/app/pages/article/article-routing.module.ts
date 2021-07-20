import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from 'src/app/pages/article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { UpdateNewsComponent } from './update-article/update-article.component';

const routes: Routes = [
  {
    path: "",
    component: ArticleComponent,
  },
  {
    path: "create",
    component: CreateArticleComponent
  },
  {
    path: ":id",
    component: UpdateNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
