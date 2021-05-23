import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/services/news/news.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  paginator = {
    per_page: 1,
    current_page: 1,
    last_page: 1,
    total: 0,
    search: "",
    from: 0,
    to: 0
  };

  newsList: any[] = []

  isLoading: boolean = true

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private utilityService: UtilitiesService,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.getListOfNews(this.paginator)
  }

  /**
   * Redirects to Create News Page
   *
   * @memberof NewsComponent
   */
  createNews() {
    this.router.navigate(
      [
        '/main/news/create'
      ]
    )
  }

  /**
   * Get List Of News
   *
   * @param {*} payload
   * @memberof NewsComponent
   */
  getListOfNews(payload: any) {
    this.spinner.show()

    this.isLoading = true

    this.newsService.getListOfNews(payload)
      .subscribe((result) => {
        if (result) {
          ({
            current_page: this.paginator.current_page,
            last_page: this.paginator.last_page,
            total: this.paginator.total,
            per_page: this.paginator.per_page,
            from: this.paginator.from,
            to: this.paginator.to,
            data: this.newsList,
          } = result);

          this.spinner.hide()
          this.isLoading = false

          console.log(this.newsList)
        }
      }, error => {
        this.spinner.hide()
        this.isLoading = false
      })
  }

  /**
   * Redirect to Update News Page
   *
   * @param {*} id
   * @memberof NewsComponent
   */
  updateNews(id: any) {
    this.router.navigate(
      [
        `/main/news/${id}`
      ]
    )
  }

  /**
   * Make Array Count For Buttons
   *
   * @param {number} i
   * @return {*} 
   * @memberof NewsComponent
   */
  makeArray(i: number) {
    let arr = [];

    for (let j = 1; j <= i; j++) {
      arr.push(j);
    }
    return arr;
  }

  /**
   * Computes Absolute Value of Two Numbers
   *
   * @param {number} n1
   * @param {number} n2
   * @return {*}  {Number}
   * @memberof NewsComponent
   */
  absoluteNumber(n1: number, n2: number): Number {
    return Math.abs(Number(n1) - Number(n2));
  }

  /**
   * Move Page
   *
   * @param {number} page
   * @memberof NewsComponent
   */
  movePage(page: number) {
    this.paginator.current_page = page;
    this.getListOfNews(this.paginator);
  }
}
