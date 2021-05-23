import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import { RootState } from 'src/app/store';
import { SetUser } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private authService: AuthService,
    private _formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private store: Store<RootState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  /**
   * Calls Login Method from API
   *
   * @memberof LoginComponent
   */
  login() {
    this.spinner.show();
    this.authService
      .login(this.loginForm.getRawValue())
      .subscribe((result) => {
        if (result) {
          this.spinner.hide()
          this.toastr.success('Login Successfully!', 'Success!')
          this.store.dispatch(new SetUser(result))
          setTimeout(() => {
            this.router.navigate(
              [
                '/main'
              ]
            )
          }, 300)
          console.log(result)
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
