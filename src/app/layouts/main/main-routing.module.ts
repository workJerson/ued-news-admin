import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "news",
        loadChildren: () =>
          import("../../pages/news/news.module").then((m) => m.NewsModule)
      },
      {
        path: "students",
        loadChildren: () =>
          import("../../pages/students/students.module").then((m) => m.StudentsModule)
      },
      {
        path: "enrollees",
        loadChildren: () =>
          import("../../pages/enrollees/enrollees.module").then((m) => m.EnrolleesModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
