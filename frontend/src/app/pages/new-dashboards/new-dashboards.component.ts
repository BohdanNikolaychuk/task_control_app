import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/core/services/dashboard.service/dashboard.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//interface
import { IForm } from './../../core/interface/IForm';

@Component({
  selector: 'app-new-dashboards',
  templateUrl: './new-dashboards.component.html',
  styleUrls: ['./new-dashboards.component.scss'],
})
export class NewDashboardsComponent implements OnInit {
  dashId!: string;
  form!: FormGroup;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      desc: new FormControl(''),
    });
  }

  createDashBoard(formData: IForm): void {
    this.dashboardService
      .createDashBoard(formData)
      .subscribe((newDashBoard) => {
        console.log(newDashBoard);
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }
}
