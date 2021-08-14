import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboardItems: any;

  constructor(
    private dashboardService: DashboardService,
    private spinner: NgxSpinnerService
  ) {
    this.spinner.show();
    this.dashboardService.getDashboardItems().subscribe(
      (result) => {
        if (result) {
          this.spinner.hide();

          this.dashboardItems = result;

          console.log(result);
        } else {
          this.spinner.hide();
        }
      },
      (err) => {
        this.spinner.hide();
      }
    );
  }

  ngOnInit(): void {}
}
