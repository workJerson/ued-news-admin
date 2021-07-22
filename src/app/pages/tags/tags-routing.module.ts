import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTagsComponent } from './create-tags/create-tags.component';

import { TagsComponent } from './tags.component';
import { UpdateTagsComponent } from './update-tags/update-tags.component';

const routes: Routes = [
  { path: '', component: TagsComponent },
  { path: 'create', component: CreateTagsComponent },
  { path: ':id', component: UpdateTagsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
