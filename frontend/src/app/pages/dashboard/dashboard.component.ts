import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IDashBoardForm } from 'src/app/core/interface/IForm';
import { DashboardService } from './../../core/services/dashboard.service/dashboard.service';

import { IDashBoard } from './../../core/interface/IDashBoard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboards!: IDashBoard[];

  showModal = false;
  Name = '';
  SortByParam = '';
  SortDirection = 'asc';

  form!: FormGroup;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getDashBoards();

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      desc: new FormControl(''),
    });
  }

  toggleModal = () => {
    this.showModal = !this.showModal;
  };

  getDashBoards() {
    this.dashboardService
      .getDashBoards()
      .subscribe((dashboards: IDashBoard[]) => {
        this.dashboards = dashboards;
      });
  }

  createDashBoard(formData: IDashBoardForm): void {
    this.dashboardService
      .createDashBoard(formData)
      .subscribe((newDashBoard: IDashBoard) => {
        this.dashboards.push(newDashBoard);
        this.form.reset();
        this.showModal = false;
      });
  }

  deleteDashBoard(id: string, i: number) {
    this.dashboardService
      .deleteDashBoard(id)
      .subscribe((newDashBoard: IDashBoard) => {
        console.log(newDashBoard);
        this.dashboards.splice(i, 1);
      });
  }
  editDashBoards(id: string, name: string) {
    this.dashboardService
      .editDashBoard(id, name)
      .subscribe((editDashBoard: string) => {
        console.log(editDashBoard);
      });
  }

  //TrackBy

  trackByFn(index: number, dashboard: IDashBoard) {
    return dashboard._id;
  }

  //sorting

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
