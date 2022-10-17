import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IDashBoardForm } from 'src/app/core/interface/IForm';
import { DashboardService } from 'src/app/core/services/dashboard.service/dashboard.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  dashId!: string;
  form!: FormGroup;

  @Input() show = false;
  @Input() customClass = '';
  @Input() closeCallback = () => false;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      desc: new FormControl(''),
    });
  }

  createDashBoard(formData: IDashBoardForm): void {
    console.log(formData);

    this.dashboardService.createDashBoard(formData);
  }
}
