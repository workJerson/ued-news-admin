import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/article/article.service';
import { TagsService } from 'src/app/services/tags/tags.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  public Editor = ClassicEditor;

  newsCategories: any = [];
  tags: any = [];

  newsForm: FormGroup;

  public model = {
    editorData: '',
  };

  public config = {
    toolbar: {
      items: [
        'heading',
        '|',
        'fontfamily',
        'fontsize',
        '|',
        'alignment',
        '|',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'strikethrough',
        'underline',
        'superscript',
        '|',
        'link',
        '|',
        'outdent',
        'indent',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'insertTable',
        '|',
        'blockQuote',
        '|',
        'undo',
        'redo',
        '|',
        'mediaEmbed',
        'autoImage',
        'image',
        'autoImage',
      ],
      shouldNotGroupWhenFull: true,
    },
    image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative',
      ],
    },
    mediaEmbed: { previewsInData: true },
  };

  constructor(
    private articleService: ArticleService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private tagsService: TagsService
  ) {}

  /**
   * Gets News Categories from service
   *
   * @memberof CreateArticleComponent
   */
  getNewsCategories() {
    this.spinner.show();

    this.articleService.getNewsCategories().subscribe(
      (result) => {
        if (result) {
          this.newsCategories = result;
          this.spinner.hide();
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  /**
   * Get list of all tags
   *
   * @memberof CreateArticleComponent
   */
  getTags() {
    this.spinner.show();
    this.tagsService.getAllTagsList().subscribe(
      (result) => {
        if (result) {
          this.tags = result;
          this.spinner.hide();
        }
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  ngOnInit(): void {
    this.getNewsCategories();
    this.getTags();

    this.newsForm = this._formBuilder.group({
      header: ['', Validators.required],
      video_path: ['', Validators.required],
      thumbnail_path: ['', Validators.required],
      short_description: ['', Validators.required],
      article_category_id: ['', Validators.required],
      tag_ids: ['', Validators.required],
    });
  }

  /**
   * Submit News Information
   *
   * @memberof CreateArticleComponent
   */
  submitNews() {
    this.spinner.show();

    var payload = this.newsForm.getRawValue();
    payload['body'] = this.model.editorData;

    this.articleService.createArticle(payload).subscribe(
      (result) => {
        if (result) {
          this.spinner.hide();
          this.toastr.success('Article Successfully Created!', 'Success!');
        }
      },
      (err) => {
        this.spinner.hide();

        let message = this.utilityService.parseError(err.errors);

        this.toastr.error(message, 'Error!', {
          enableHtml: true,
        });
      }
    );
  }
}
