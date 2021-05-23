import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/services/news/news.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit {

  public Editor = ClassicEditor;

  newsCategories: any = []

  newsForm: FormGroup

  public model = {
    editorData: ''
  }

  newsId: any

  news: any

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
    private newsService: NewsService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.newsId = this.route.snapshot.paramMap.get('id');
    console.log(this.newsId)
    this.getNewsById()
  }

  /**
   * Gets News Categories from service
   *
   * @memberof UpdateNewsComponent
   */
  getNewsCategories() {
    this.spinner.show()

    this.newsService.getNewsCategories()
      .subscribe((result) => {
        if (result) {
          console.log(result)
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
        title: ['', Validators.required],
        news_category_id: ['', Validators.required],
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

    this.newsService.getNewsById(this.newsId)
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()
          console.log(result)
          this.news = result

          this.newsForm.patchValue(
            {
              title: result.title,
              news_category_id: result.news_category_id,
            }
          )

          this.model.editorData = result.description
        }
      }, err => {
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
    payload['description'] = this.model.editorData

    this.newsService.updateNewsById(
      {
        ...payload,
        id: this.newsId
      }
    )
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()
          this.toastr.success('News Successfully Updated!', 'Success!')
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
