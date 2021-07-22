import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetTagsModel } from 'src/app/models/tags.model';
import { ArticleService } from 'src/app/services/article/article.service';
import { TagsService } from 'src/app/services/tags/tags.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateNewsComponent implements OnInit {

  public Editor = ClassicEditor;

  newsCategories: any = []
  tags: GetTagsModel[] = []

  newsForm: FormGroup

  public model = {
    editorData: ''
  }
  newsId: any

  public config = {
    toolbar: {
      items: [
        'heading', '|',
        'fontfamily', 'fontsize', '|',
        'alignment', '|',
        'fontColor', 'fontBackgroundColor', '|',
        'bold', 'italic', 'strikethrough', 'underline', 'superscript', '|',
        'link', '|',
        'outdent', 'indent', '|',
        'bulletedList', 'numberedList', 'todoList', '|',
        'insertTable', '|',
        'blockQuote', '|',
        'undo', 'redo', '|',
        'mediaEmbed', 'autoImage', 'image', 'autoImage'
      ],
      shouldNotGroupWhenFull: true
    },
    image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
      ]
    },
  }

  constructor(
    private articleService: ArticleService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tagsService: TagsService
  ) {
    this.newsId = this.route.snapshot.paramMap.get('id');
    this.getNewsById()
    this.getTags()
  }

  /**
   * Gets News Categories from service
   *
   * @memberof UpdateNewsComponent
   */
  getNewsCategories() {
    this.spinner.show()

    this.articleService.getNewsCategories()
      .subscribe((result) => {
        if (result) {
          this.newsCategories = result
          this.spinner.hide()
        }
      }, error => {
        this.spinner.hide()
      })
  }

  ngOnInit(): void {
    this.getNewsCategories()

    this.newsForm = this._formBuilder.group(
      {
        header: ['', Validators.required],
        video_path: ['', Validators.required],
        thumbnail_path: ['', Validators.required],
        article_category_id: ['', Validators.required],
        tag_ids: ['', Validators.required],
        id: ['', Validators.required],
      }
    );
  }

  /**
   * Get News By ID
   *
   * @memberof UpdateNewsComponent
   */
  getNewsById() {
    this.spinner.show()

    this.articleService.getNewsById(this.newsId)
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()

          const {
            header,
            body,
            video_path,
            thumbnail_path,
            article_category_id,
            tags,
            id
          } = result

          let tag_ids = tags.map((tag) => tag.id)

          this.newsForm.patchValue(
            {
              header,
              video_path,
              thumbnail_path,
              article_category_id,
              tag_ids,
              id
            }
          )

          this.model.editorData = body
        }
      }, err => {
        this.spinner.hide()
      })
  }

  getTags(){
    this.spinner.show()
    this.tagsService.getAllTagsList()
    .subscribe((result) => {
      if (result) {
        this.tags = result
        this.spinner.hide()
      }
    }, error => {
      this.spinner.hide()
    })
  }

  /**
   * Save News
   *
   * @memberof UpdateNewsComponent
   */
  saveNews() {
    this.spinner.show()

    var payload = this.newsForm.getRawValue()
    payload['body'] = this.model.editorData

    this.articleService.updateNewsById(payload)
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()
          this.toastr.success('Article Successfully Updated!', 'Success!')
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
