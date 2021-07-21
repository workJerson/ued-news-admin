import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'articles',
        loadChildren: () =>
          import('../../pages/article/article.module').then((m) => m.ArticleModule),
      },
      {
        path: 'article-categories',
        loadChildren: () =>
          import('../../pages/article-category/article-category.module').then((m) => m.ArticleCategoryModule),
      },
      {
        path: 'tags',
        loadChildren: () =>
          import('../../pages/tags/tags.module').then((m) => m.TagsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('../../pages/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../../pages/setting/setting.module').then((m) => m.SettingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
