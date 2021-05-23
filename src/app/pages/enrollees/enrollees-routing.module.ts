import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEnrolleeComponent } from './create-enrollee/create-enrollee.component';
import { EnrolleesComponent } from './enrollees.component';
import { UpdateEnrolleeComponent } from './update-enrollee/update-enrollee.component';
import { ViewEnrolleeComponent } from './view-enrollee/view-enrollee.component';

const routes: Routes = [
  {
    path: "",
    component: EnrolleesComponent,
  },
  {
    path: ":id",
    component: ViewEnrolleeComponent
  },
  {
    path: "create",
    component: CreateEnrolleeComponent
  },
  {
    path: "update/:id",
    component: UpdateEnrolleeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolleesRoutingModule { }
