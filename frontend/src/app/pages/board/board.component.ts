import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
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
  todo: any[] = [];
  progress: any[] = [];
  done: any[] = [];
  selectedID!: string;
  form!: FormGroup;
  showModal = false;
  selectedStatus!: string;
  selectedArch: boolean;

  dashBoardsSub!: Subscription;

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
      this.boardService.getBoard(this.selectedID);
      this.getBoards();
    });
  }

  getBoards() {
    this.dashBoardsSub = this.boardService
      .getDashBoardsObs()
      .subscribe((boards: any) => {
        boards.forEach((board) => {
          switch (board.status) {
            case 'TODO':
              this.todo.push(board);
              break;
            case 'INPROGRESS':
              this.progress.push(board);
              break;
            case 'DONE':
              this.done.push(board);
              break;
          }
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
    archive = !archive;
    this.boardService
      .changeArchiveStatus(this.selectedID, boardId, archive)
      .subscribe((editBoard) => {});
  }

  deleteBoard(boardId: string, index: number) {
    this.boardService
      .deleteBoard(this.selectedID, boardId)
      .subscribe((deleteBoard: IBoard) => {
        switch (deleteBoard.status) {
          case 'TODO':
            this.todo.splice(index, 1);
            break;
          case 'INPROGRESS':
            this.progress.splice(index, 1);
            break;
          case 'DONE':
            this.done.splice(index, 1);
            break;
        }
      });
  }

  createBoard(formData: IBoardForm) {
    this.boardService
      .createBoard(this.selectedID, formData.name, this.selectedStatus)
      .subscribe((newBoard: IBoard) => {
        switch (newBoard.status) {
          case 'TODO':
            this.todo.push(newBoard);
            break;
          case 'INPROGRESS':
            this.progress.push(newBoard);
            break;
          case 'DONE':
            this.done.push(newBoard);
            break;
        }

        this.showModal = false;
        this.form.reset();
        this.selectedStatus = '';
      });
  }
}
