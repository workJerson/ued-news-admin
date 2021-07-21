import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetArticleCategoryModel } from 'src/app/models/article-category.model';
import { ArticleCategoryService } from 'src/app/services/article-category/article-category.service';

@Component({
  selector: 'app-article-category',
  templateUrl: './article-category.component.html',
  styleUrls: ['./article-category.component.css']
})
export class ArticleCategoryComponent implements OnInit {

  paginator = {
    per_page: 10,
    current_page: 1,
    last_page: 1,
    total: 0,
    search: "",
    from: 0,
    to: 0
  };

  articleCategoryList: GetArticleCategoryModel[] = []
  isLoading: boolean = true

  constructor(
    private articleCategoryService: ArticleCategoryService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getArticleCategoryList(this.paginator)
  }

  /**
   * Make Array Count For Buttons
   *
   * @param {number} i
   * @return {*}
   * @memberof ArticleComponent
   */
  makeArray(i: number) {
    let arr = [];

    for (let j = 1; j <= i; j++) {
      arr.push(j);
    }
    return arr;
  }

  /**
   * Move Page
   *
   * @param {number} page
   * @memberof ArticleComponent
   */
  movePage(page: number)
  {
    this.paginator.current_page = page;
    this.getArticleCategoryList(this.paginator);
  }

  /**
   * Re route to create category page
   *
   * @memberof ArticleCategoryComponent
   */
  createArticleCategory()
  {
    this.router.navigate(
      [
        '/main/article-categories/create'
      ]
    )
  }

  /**
   * Re route to update category page
   *
   * @param {number} id
   * @memberof ArticleCategoryComponent
   */
  updateArticleCategory(id: number)
  {
    this.router.navigate(
      [
        `/main/article-categories/${id}`
      ]
    )
  }

  /**
   * Delete category by id
   *
   * @param {number} id
   * @memberof ArticleCategoryComponent
   */
  deleteArticleCategory(id: number)
  {
    this.spinner.show()
    this.isLoading = true

    this.articleCategoryService.deleteArticleCategoryById(id)
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()
          this.isLoading = false
          this.toastr.success('Category successfully deleted', 'Success!')
          this.getArticleCategoryList(this.paginator)
        }
      }, error => {
        this.spinner.hide()
        this.isLoading = false

        this.toastr.error("An error occurred on deleting category", 'Error!', {
          enableHtml: true
        })
      })
  }

  /**
   * Get list of categories
   *
   * @param {*} payload
   * @memberof ArticleCategoryComponent
   */
  getArticleCategoryList(payload: any)
  {
    this.spinner.show()
    this.isLoading = true

    this.articleCategoryService.getArticleCategoryList(payload)
      .subscribe((result) => {
        if (result) {
          ({
            current_page: this.paginator.current_page,
            last_page: this.paginator.last_page,
            total: this.paginator.total,
            per_page: this.paginator.per_page,
            from: this.paginator.from,
            to: this.paginator.to,
            data: this.articleCategoryList,
          } = result);

          this.spinner.hide()
          this.isLoading = false
        }
      }, error => {
        this.spinner.hide()
        this.isLoading = false
      })
  }

}
