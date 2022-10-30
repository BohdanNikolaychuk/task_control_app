import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IDashBoardForm } from 'src/app/core/interface/IForm';
import { DashboardService } from './../../core/services/dashboard.service/dashboard.service';

import { IDashBoard } from './../../core/interface/IDashBoard';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboards: IDashBoard[] = [];
  //serach
  showModal = false;
  SearchValue = '';
  SortByParam = 'name';
  SortDirection = 'asc';
  //Form
  form!: FormGroup;

  //Rx
  dashBoardsSub!: Subscription;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashBoards();
    this.getDashBoards();
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      desc: new FormControl(''),
    });
  }

  getDashBoards() {
    this.dashBoardsSub = this.dashboardService
      .getDashBoardsObs()
      .subscribe((dashboards) => {
        this.dashboards = dashboards;
      });
  }

  createDashBoard(formData: IDashBoardForm): void {
    this.dashboardService.createDashBoard(formData);
    this.showModal = false;
    this.form.reset();
  }

  deleteDashBoard(id: string) {
    this.dashboardService.deleteDashBoard(id);
  }
  editDashBoards(id: string, name: string) {
    this.dashboardService.editDashBoard(id, name);
  }

  //TrackBy

  trackByFn(index: number, dashboard: IDashBoard) {
    return dashboard._id;
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }

  toggleModal = () => {
    this.showModal = !this.showModal;
  };
}
