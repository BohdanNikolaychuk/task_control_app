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

  ngOnInit(): void {}

  createDashBoard(name: string) {
    this.dashboardService.createDashBoard(name).subscribe((newDashBoard) => {
      console.log(newDashBoard);
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
