import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TagsService } from 'src/app/services/tags/tags.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-update-tags',
  templateUrl: './update-tags.component.html',
  styleUrls: ['./update-tags.component.css']
})
export class UpdateTagsComponent implements OnInit {

  tagsForm: FormGroup
  tagId: any

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private tagsService: TagsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.tagId = this.route.snapshot.paramMap.get('id');
    this.getTagById()

    this.tagsForm = this._formBuilder.group(
      {
        name: ['', Validators.required],
        id: ['', Validators.required],
      }
    );
  }
  getTagById() {
    this.spinner.show()

    this.tagsService.getTagById(this.tagId)
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()

          const {
            name,
            id
          } = result

          this.tagsForm.patchValue(
            {
              name,
              id
            }
          )
        }
      }, err => {
        this.spinner.hide()
      })
  }
  saveTag()
  {
    this.spinner.show()
    this.tagsService.updateTagById(this.tagsForm.getRawValue())
    .subscribe((result) => {
      if (result) {
        this.spinner.hide()
        this.toastr.success('Tag Successfully Updated!', 'Success!')
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
