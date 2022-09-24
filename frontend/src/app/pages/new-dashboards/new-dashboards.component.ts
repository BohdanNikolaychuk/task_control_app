import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/core/services/dashboard.service/dashboard.service';

@Component({
  selector: 'app-new-dashboards',
  templateUrl: './new-dashboards.component.html',
  styleUrls: ['./new-dashboards.component.scss'],
})
export class NewDashboardsComponent implements OnInit {
  dashId!: string;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.dashId = params['dashId'];
      console.log(this.dashId);
    });
  }

  createDashBoard(name: string) {
    this.dashboardService.createDashBoard(name).subscribe((newDashBoard) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
