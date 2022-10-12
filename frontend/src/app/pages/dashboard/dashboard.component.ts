import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IDashBoard } from 'src/app/core/interface/IDashBoard';

import { IDashBoardForm } from 'src/app/core/interface/IForm';
import { DashboardService } from './../../core/services/dashboard.service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboards!: IDashBoard[];

  showModal = false;
  Name = '';
  form!: FormGroup;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashBoards().subscribe((dashboards: any) => {
      console.log(dashboards);

      this.dashboards = dashboards;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      desc: new FormControl(''),
    });
  }
  toggleModal = () => {
    this.showModal = !this.showModal;
  };

  createDashBoard(formData: IDashBoardForm): void {
    this.dashboardService
      .createDashBoard(formData)
      .subscribe((newDashBoard: any) => {
        this.dashboards.push(newDashBoard);
        this.form.reset();
        this.showModal = false;
      });
  }

  deleteDashBoard(id: string, i: number) {
    this.dashboardService.deleteDashBoard(id).subscribe((newDashBoard) => {
      console.log(newDashBoard);
      this.dashboards.splice(i, 1);
    });
  }

  editDashBoards(id: string, name: string) {
    this.dashboardService.editDashBoard(id, name).subscribe((editDashBoard) => {
      console.log(editDashBoard);
    });
  }
  identify(index: number, dashboard: object) {
    return dashboard;
  }
}
