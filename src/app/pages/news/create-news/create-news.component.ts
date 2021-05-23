import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/services/news/news.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  public Editor = ClassicEditor;

  newsCategories: any = []

  newsForm: FormGroup

  public model = {
    editorData: ''
  }

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
  ) {
  }

  /**
   * Gets News Categories from service
   *
   * @memberof CreateNewsComponent
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
   * Submit News Information
   *
   * @memberof CreateNewsComponent
   */
  submitNews() {
    this.spinner.show()

    var payload = this.newsForm.getRawValue()
    payload['description'] = this.model.editorData

    this.newsService.createNews(
      payload
    )
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()
          this.toastr.success('News Successfully Created!', 'Success!')
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
