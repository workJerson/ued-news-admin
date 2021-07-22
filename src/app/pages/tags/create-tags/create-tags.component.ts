import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TagsService } from 'src/app/services/tags/tags.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-create-tags',
  templateUrl: './create-tags.component.html',
  styleUrls: ['./create-tags.component.css']
})
export class CreateTagsComponent implements OnInit {

  tagsForm: FormGroup

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private tagsService: TagsService
  ) { }

  ngOnInit(): void {

    this.tagsForm = this._formBuilder.group(
      {
        name: ['', Validators.required],
      }
    );
  }

  submitTag()
  {
    this.spinner.show()
    var payload = this.tagsForm.getRawValue()
    this.tagsService
    .createTag(payload)
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
