import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBoard } from 'src/app/core/interface/IBoard';
import { IBoardForm } from 'src/app/core/interface/IForm';

import { BoardService } from 'src/app/core/services/board.service/board.service';

@Component({
  selector: 'app-board',
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  showModal = false;
  SearchValue = '';
  SortByParam = 'name';
  SortDirection = 'asc';

  //__________
  boards: IBoard[] = [];
  todo: IBoard[] = [];
  progress: IBoard[] = [];
  done: IBoard[] = [];
  selectedID!: string;
  form!: FormGroup;

  selectedStatus!: string;
  selectedArch: boolean;

  BoardsSub!: Subscription;

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
    });
    this.getBoards();
    this.boardService.getBoard(this.selectedID);
  }

  getBoards() {
    this.BoardsSub = this.boardService
      .getBoardsObs()
      .subscribe((boards: IBoard[]) => {
        this.boards = boards;
        this.todo = boards.filter((board) => board.status === 'TODO');
        this.progress = boards.filter((board) => board.status === 'INPROGRESS');
        this.done = boards.filter((board) => board.status === 'DONE');
      });
  }

  createBoard(formData: IBoardForm) {
    this.boardService.createBoard(
      this.selectedID,
      formData.name,
      this.selectedStatus
    );

    this.showModal = false;
    this.form.reset();
    this.selectedStatus = '';
  }

  editBoard(boardId: string, name: string) {
    this.boardService.editBoard(this.selectedID, boardId, name);
  }

  changeArchiveStatus(boardId: string, archive: boolean) {
    this.boardService.changeArchiveStatus(this.selectedID, boardId, !archive);
  }

  deleteBoard(boardId: string, index: number) {
    this.boardService.deleteBoard(this.selectedID, boardId);
  }

  changeStatusInTask(boardId: string, status: string) {
    this.boardService.changeStatusInTask(this.selectedID, boardId, status);
  }

  drop(event: CdkDragDrop<IBoard[]>) {
    const currentElement =
      event.container.element.nativeElement.classList.toString();

    if (currentElement.includes('progress')) {
      this.boardService.changeStatusInTask(
        this.selectedID,
        event.item.element.nativeElement.id,
        'INPROGRESS'
      );
    } else if (currentElement.includes('done')) {
      this.boardService.changeStatusInTask(
        this.selectedID,
        event.item.element.nativeElement.id,
        'DONE'
      );
    } else if (currentElement.includes('todo')) {
      this.boardService.changeStatusInTask(
        this.selectedID,
        event.item.element.nativeElement.id,
        'TODO'
      );
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  toggleModal = (status: string) => {
    this.showModal = !this.showModal;
    this.selectedStatus = status;
    this.form.reset();
  };

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
