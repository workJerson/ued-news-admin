import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from 'src/app/services/news/news.service';
import { TestimonialService } from 'src/app/services/testimonial/testimonial.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent implements OnInit {
  paginator = {
    per_page: 10,
    current_page: 1,
    last_page: 1,
    total: 0,
    search: '',
    from: 0,
    to: 0,
  };

  testimonialList: any[] = [];

  isLoading: boolean = true;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private testimonialService: TestimonialService
  ) {}

  ngOnInit(): void {
    this.getListOfTestimonials(this.paginator);
  }

  createTestimony() {
    this.router.navigate(['/main/testimony/create']);
  }

  getListOfTestimonials(payload: any) {
    this.spinner.show();

    this.isLoading = true;

    this.testimonialService.getListOfTestimonial(payload).subscribe(
      (result) => {
        if (result) {
          ({
            current_page: this.paginator.current_page,
            last_page: this.paginator.last_page,
            total: this.paginator.total,
            per_page: this.paginator.per_page,
            from: this.paginator.from,
            to: this.paginator.to,
            data: this.testimonialList,
          } = result);

          this.spinner.hide();
          this.isLoading = false;
        }
      },
      (error) => {
        this.spinner.hide();
        this.isLoading = false;
      }
    );
  }

  updateNews(id: any) {
    // this.router.navigate([`/main/news/${id}`]);
  }

  makeArray(i: number) {
    let arr = [];

    for (let j = 1; j <= i; j++) {
      arr.push(j);
    }
    return arr;
  }

  absoluteNumber(n1: number, n2: number): Number {
    return Math.abs(Number(n1) - Number(n2));
  }

  movePage(page: number) {
    this.paginator.current_page = page;
    this.getListOfTestimonials(this.paginator);
  }
}
