import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DashboardService } from './../../core/services/dashboard.service/dashboard.service';

@Component({
  selector: 'app-new-boards',
  templateUrl: './new-boards.component.html',
  styleUrls: ['./new-boards.component.scss'],
})
export class NewBoardsComponent implements OnInit {
  dashId!: string;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.dashId = params['dashId'];
    });
  }
  createBoard(name: string) {
    this.dashboardService
      .createBoard(this.dashId, name)
      .subscribe((newBoard) => {
        console.log(newBoard);
        this.router.navigate([`/dashboards/${this.dashId}/boards`]);
      });
  }
}
