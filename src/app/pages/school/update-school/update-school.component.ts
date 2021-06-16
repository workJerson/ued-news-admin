import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SchoolService } from 'src/app/services/school/school.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css'],
})
export class UpdateSchoolComponent implements OnInit {
  schoolForm: FormGroup;

  schoolId;

  files: File[] = [];

  image_path: String = '';

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private router: Router,
    private _formBuilder: FormBuilder,
    private schoolService: SchoolService,
    private route: ActivatedRoute
  ) {
    this.schoolId = this.route.snapshot.paramMap.get('id');

    this.getSchoolById();
  }

  ngOnInit(): void {
    this.schoolForm = this._formBuilder.group({
      name: ['', Validators.required],
      order: ['', Validators.required],
      school_email: ['', Validators.email],
      address: ['', Validators.required],
    });
  }

  getSchoolById() {
    this.spinner.show();

    this.schoolService.getSchoolById(this.schoolId).subscribe(
      (result) => {
        if (result) {
          const { name, order, address, school_email, image_path } = result;

          this.image_path = image_path;

          this.schoolForm.setValue({
            name,
            order,
            school_email,
            address,
          });

          this.spinner.hide();
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }

  updateSchool() {
    let payload = {
      ...this.schoolForm.value,
      id: this.schoolId,
    };

    let formData = this.utilityService.convertModelToFormData(payload);

    if (this.files.length !== 0) {
      formData.append('image', this.files[0]);
    } else {
      formData.append('image', '');
    }

    this.spinner.show();
    this.schoolService
      .updateSchoolById({
        payload: formData,
      })
      .subscribe(
        (result) => {
          if (result) {
            this.spinner.hide();
            this.files = [];
            this.toastr.success('School Successfully Updated!', 'Success!');
          }
        },
        (err) => {
          this.spinner.hide();
          console.log(err);

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
