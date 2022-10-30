import { Component, Input, OnInit } from '@angular/core';
import { IDashBoard } from './../../core/interface/IDashBoard';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss'],
})
export class DashboardListComponent implements OnInit {
  @Input() dashboards: IDashBoard[];
  @Input() deleteDashBoard: (id: string) => void;
  @Input() editDashBoards: (id: string, name: string) => void;

  constructor() {}

  ngOnInit(): void {}
}
