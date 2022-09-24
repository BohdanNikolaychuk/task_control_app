import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DashboardService } from './../../core/services/dashboard.service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboards!: any[];
  boards!: any[];

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dashboardService.getDashBoards().subscribe((dashboards: any) => {
      this.dashboards = dashboards;
    });
  }
}
