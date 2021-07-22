import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ArticleCategoryService } from 'src/app/services/article-category/article-category.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-update-article-category',
  templateUrl: './update-article-category.component.html',
  styleUrls: ['./update-article-category.component.css']
})
export class UpdateArticleCategoryComponent implements OnInit {

  categoryForm: FormGroup
  categoryId: any

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private articleCategoryService: ArticleCategoryService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.getCategoryById()

    this.categoryForm = this._formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
        id: ['', Validators.required],
      }
    );
  }

  getCategoryById()
  {
    this.spinner.show()

    this.articleCategoryService.getArticleCategoryById(this.categoryId)
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()

          const {
            name,
            description,
            id
          } = result

          this.categoryForm.patchValue(
            {
              name,
              description,
              id
            }
          )
        }
      }, err => {
        this.spinner.hide()
      })
  }
  saveCategory()
  {
    this.spinner.show()
    this.articleCategoryService.updateArticleCategoryById(this.categoryForm.getRawValue())
    .subscribe((result) => {
      if (result) {
        this.spinner.hide()
        this.toastr.success('Category Successfully Updated!', 'Success!')
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
