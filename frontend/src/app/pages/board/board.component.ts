import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DashboardService } from 'src/app/core/services/dashboard.service/dashboard.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  boards!: any[];

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params['dashId']);
      this.dashboardService
        .getBoard(params['dashId'])
        .subscribe((boards: any) => {
          console.log(boards);
          this.boards = boards;
        });
    });
  }
}
