import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';
import { UpdateStudentsComponent } from './update-students/update-students.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

const routes: Routes = [
  {
    path: "",
    component: StudentsComponent,
  },
  {
    path: ":id",
    component: ViewStudentsComponent
  },
  {
    path: "update/:id",
    component: UpdateStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
