import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IBoard } from 'src/app/core/interface/IBoard';
import { IBoardForm } from 'src/app/core/interface/IForm';

import { BoardService } from 'src/app/core/services/board.service/board.service';

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
    private boardService: BoardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });

    this.route.params.subscribe((params: Params) => {
      this.selectedID = params['dashId'];
      this.boardService.getBoard(params['dashId']).subscribe((boards: any) => {
        this.boards = boards;
      });
    });
  }

  toggleModal = (status: string) => {
    this.showModal = !this.showModal;
    this.selectedStatus = status;
  };

  editBoard(boardId: string, name: string) {
    this.boardService
      .editBoard(this.selectedID, boardId, name)
      .subscribe((editBoard) => {
        console.log(editBoard);
      });
  }

  changeArchiveStatus(boardId: string, archive: boolean) {
    this.boardService
      .changeArchiveStatus(this.selectedID, boardId, archive)
      .subscribe((editBoard) => {
        console.log(editBoard);
      });
  }

  deleteBoard(boardId: string, index: number) {
    this.boardService
      .deleteBoard(this.selectedID, boardId)
      .subscribe((deleteBoard) => {
        this.boards.splice(index, 1);
      });
  }

  createBoard(formData: IBoardForm) {
    this.boardService
      .createBoard(this.selectedID, formData.name, this.selectedStatus)
      .subscribe((newBoard) => {
        this.boards.push(newBoard);
        this.showModal = false;
        this.form.reset();
        this.selectedStatus = '';
      });
  }
}
