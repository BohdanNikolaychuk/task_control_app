import { Component, OnInit } from '@angular/core';
import { DashboardService } from './../../core/services/dashboard.service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboards!: any[];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashBoards().subscribe((dashboards: any) => {
      this.dashboards = dashboards;
      console.log(dashboards);
    });
  }
}
