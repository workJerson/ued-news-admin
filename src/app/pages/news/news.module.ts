import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { NewsRoutingModule } from './news-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UpdateNewsComponent } from './update-news/update-news.component';

@NgModule({
  declarations: [
    NewsComponent,
    CreateNewsComponent,
    UpdateNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NewsRoutingModule,
    FormsModule,
    CKEditorModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class NewsModule { }
