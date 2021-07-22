import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetTagsModel } from 'src/app/models/tags.model';
import { TagsService } from 'src/app/services/tags/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  paginator = {
    per_page: 10,
    current_page: 1,
    last_page: 1,
    total: 0,
    search: "",
    from: 0,
    to: 0,
  };

  tagsList : GetTagsModel[] = []
  isLoading: boolean = true

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private tagsService: TagsService
  ) { }

  ngOnInit(): void {
    this.getTagsList(this.paginator)
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
    this.getTagsList(this.paginator);
  }

  createTag(){
    this.router.navigate(
      [
        '/main/tags/create'
      ]
    )
  }

  updateTag(id: number){
    this.router.navigate(
      [
        `/main/tags/${id}`
      ]
    )
  }

  deleteTag(id: number)
  {
    this.spinner.show()
    this.isLoading = true

    this.tagsService.deleteTagById(id)
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()
          this.isLoading = false
          this.toastr.success('Tag successfully deleted', 'Success!')
          this.getTagsList(this.paginator)
        }
      }, error => {
        this.spinner.hide()
        this.isLoading = false

        this.toastr.error("An error occurred on deleting tag", 'Error!', {
          enableHtml: true
        })
      })
  }

  getTagsList(payload: any)
  {
    this.spinner.show()
    this.isLoading = true
    this.tagsService.getTagsList(payload)
      .subscribe((result) => {
        if (result) {
          ({
            current_page: this.paginator.current_page,
            last_page: this.paginator.last_page,
            total: this.paginator.total,
            per_page: this.paginator.per_page,
            from: this.paginator.from,
            to: this.paginator.to,
            data: this.tagsList,
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
