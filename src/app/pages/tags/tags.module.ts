import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CreateTagsComponent } from './create-tags/create-tags.component';
import { UpdateTagsComponent } from './update-tags/update-tags.component';


@NgModule({
  declarations: [TagsComponent, CreateTagsComponent, UpdateTagsComponent],
  imports: [
    CommonModule,
    TagsRoutingModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class TagsModule { }
