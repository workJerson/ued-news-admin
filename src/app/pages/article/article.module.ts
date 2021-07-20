import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleRoutingModule } from './article-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UpdateNewsComponent } from './update-article/update-article.component';

@NgModule({
  declarations: [
    ArticleComponent,
    CreateArticleComponent,
    UpdateNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArticleRoutingModule,
    FormsModule,
    CKEditorModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class ArticleModule { }
