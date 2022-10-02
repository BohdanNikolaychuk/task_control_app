import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IBoard } from 'src/app/core/interface/IForm';
import { DashboardService } from 'src/app/core/services/dashboard.service/dashboard.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  boards!: any[];
  selectedID!: string;
  form!: FormGroup;
  showModal = false;
  selectedStatus!: string;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });

    this.route.params.subscribe((params: Params) => {
      this.selectedID = params['dashId'];
      this.dashboardService
        .getBoard(params['dashId'])
        .subscribe((boards: any) => {
          this.boards = boards;
        });
    });
  }

  toggleModal = (status: string) => {
    this.showModal = !this.showModal;
    this.selectedStatus = status;
  };

  createBoard(formData: IBoard) {
    this.dashboardService
      .createBoard(this.selectedID, formData.name, this.selectedStatus)
      .subscribe((newBoard) => {
        this.boards.push(newBoard);
        this.showModal = false;
        this.form.reset();
        this.selectedStatus = '';
      });
  }
}
