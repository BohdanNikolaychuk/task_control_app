import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IDashBoardForm } from 'src/app/core/interface/IForm';
import { DashboardService } from './../../core/services/dashboard.service/dashboard.service';

import { IDashBoard } from './../../core/interface/IDashBoard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboards$!: Observable<IDashBoard[]>;
  dashboards!: IDashBoard[];
  showModal = false;
  SearchValue = '';
  SortByParam = 'name';
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
    this.dashboards$ = this.dashboardService.getDashBoards();
    this.dashboards$.subscribe((dashboards) => (this.dashboards = dashboards));
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
        this.dashboards.splice(i, 1);
      });
  }
  editDashBoards(id: string, name: string) {
    this.dashboardService
      .editDashBoard(id, name)
      .subscribe((editDashBoard: string) => {});
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
