import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ArticleCategoryService } from 'src/app/services/article-category/article-category.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-create-article-category',
  templateUrl: './create-article-category.component.html',
  styleUrls: ['./create-article-category.component.css']
})
export class CreateArticleCategoryComponent implements OnInit {
  categoryForm: FormGroup

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private articleCategoryService: ArticleCategoryService
  ) { }

  ngOnInit(): void {

    this.categoryForm = this._formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
      }
    );
  }
  submitCategory()
  {
    this.spinner.show()
    var payload = this.categoryForm.getRawValue()
    this.articleCategoryService
      .createArticleCategory(payload)
        .subscribe((result) => {
          if (result) {
            this.spinner.hide()
            this.toastr.success('Category Created!', 'Success!')
          }
        }, err => {
          this.spinner.hide()

          let message = this.utilityService.parseError(err.errors);

          this.toastr.error(message, 'Error!', {
            enableHtml: true
          })
        })
    }

}
