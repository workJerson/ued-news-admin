import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SchoolService } from 'src/app/services/school/school.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.css'],
})
export class CreateSchoolComponent implements OnInit {
  schoolForm: FormGroup;

  files: File[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    this.schoolForm = this._formBuilder.group({
      name: ['', Validators.required],
      order: ['', Validators.required],
      school_email: ['', Validators.email],
      address: ['', Validators.required],
    });
  }

  submitSchool() {
    this.spinner.show();

    let payload = {
      ...this.schoolForm.value,
    };

    let formData = this.utilityService.convertModelToFormData(payload);

    if (this.files.length !== 0) {
      formData.append('image', this.files[0]);
    } else {
      formData.append('image', '');
    }

    this.schoolService.createSchool(formData).subscribe(
      (result) => {
        if (result) {
          this.spinner.hide();
          this.files = [];
          this.schoolForm.reset();
          this.toastr.success('School Successfully Created!', 'Success!');
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

  onSelect(event) {
    console.log(event);
    if (this.files.length == 0) {
      this.files.push(...event.addedFiles);
    } else {
      this.files = [...event.addedFiles];
    }
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
