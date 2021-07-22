import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { GetUserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  paginator = {
    per_page: 10,
    current_page: 1,
    last_page: 1,
    total: 0,
    search: "",
    from: 0,
    to: 0
  };

  userList: GetUserModel[] = []

  isLoading: boolean = true

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUserList(this.paginator)
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
    this.getUserList(this.paginator);
  }

  getUserList(payload: any)
  {
    this.spinner.show()
    this.isLoading = true
    this.userService.getUserList(payload)
      .subscribe((result) => {
        if (result) {
          ({
            current_page: this.paginator.current_page,
            last_page: this.paginator.last_page,
            total: this.paginator.total,
            per_page: this.paginator.per_page,
            from: this.paginator.from,
            to: this.paginator.to,
            data: this.userList,
          } = result);

          this.spinner.hide()
          this.isLoading = false
        }
      }, error => {
        this.spinner.hide()
        this.isLoading = false
      })
  }

  createUser()
  {
    this.router.navigate(
      [
        '/main/users/create'
      ]
    )
  }
}
