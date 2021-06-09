import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school.component';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { ViewSchoolComponent } from './view-school/view-school.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolComponent,
  },
  {
    path: ':id',
    component: ViewSchoolComponent,
  },
  {
    path: 'update/:id',
    component: UpdateSchoolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolRoutingModule {}
