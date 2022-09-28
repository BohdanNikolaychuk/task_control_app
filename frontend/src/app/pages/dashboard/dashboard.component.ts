import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dashboardService.getDashBoards().subscribe((dashboards: any) => {
      this.dashboards = dashboards;
    });
    // this.dashboardService.getBoard().subscribe((boards: any) => {
    //   this.boards = boards;
    // });
  }

  deleteDashBoard(id: string, i: number) {
    this.dashboardService.deleteDashBoard(id).subscribe((newDashBoard) => {
      console.log(newDashBoard);
      this.dashboards.splice(i, 1);
    });
  }

  editDashBoards(id: string, name: string) {
    this.dashboardService
      .editDashBoard(id, name)
      .subscribe((editDashBoard) => {});
  }
}
