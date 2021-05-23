import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from 'src/app/pages/news/news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';

const routes: Routes = [
  {
    path: "",
    component: NewsComponent,
  },
  {
    path: "create",
    component: CreateNewsComponent
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
export class NewsRoutingModule { }
