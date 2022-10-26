import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBoard } from '../../interface/IBoard';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private BoardsGeted = false;
  private Boards = new BehaviorSubject<IBoard[]>([]);

  constructor(private http: HttpClient) {}

  getBoardsObs(): Observable<IBoard[]> {
    return this.Boards;
  }

  getBoardsValue() {
    return this.Boards.getValue();
  }

  setBoards(Boards: IBoard[]) {
    this.Boards.next(Boards);
  }

  getBoard(dashId: string) {
    this.http
      .get(`${environment.MIAN_URL}dashboards/${dashId}/boards`)
      .subscribe((dashBoards: IBoard[]) => {
        this.setBoards(dashBoards);
      });
  }

  createBoard(dashId: string, name: Object, status: string) {
    this.http
      .post(`${environment.MIAN_URL}dashboards/${dashId}/boards`, {
        name,
        status,
      })
      .subscribe((newBoard: IBoard) => {
        const newBoards = [...this.getBoardsValue(), newBoard];
        this.setBoards(newBoards);
        console.log(newBoards);
      });
  }

  deleteBoard(dashId: string, boardId: string) {
    this.http
      .delete(`${environment.MIAN_URL}dashboards/${dashId}/boards/${boardId}`)
      .subscribe(() => {
        let filteredDash = this.getBoardsValue().filter(
          (board) => board._id !== boardId
        );
        this.setBoards(filteredDash);
      });
  }

  editBoard(dashId: string, boardId: string, name: string) {
    let boardsTemp = this.getBoardsValue().map((board) => {
      return board._id === boardId ? { ...board, name } : board;
    });
    this.setBoards(boardsTemp);
    console.log(boardsTemp);

    this.http
      .patch(
        `${environment.MIAN_URL}dashboards/${dashId}/boards/${boardId}`,
        {
          name,
        },
        { responseType: 'text' }
      )
      .subscribe();
  }

  changeArchiveStatus(dashId: string, boardId: string, archive: boolean) {
    let boardsTemp = this.getBoardsValue().map((board) => {
      return board._id === boardId ? { ...board, archive } : board;
    });
    this.setBoards(boardsTemp);

    this.http
      .patch(
        `${environment.MIAN_URL}dashboards/${dashId}/boards/${boardId}`,
        {
          archive: archive,
        },
        { responseType: 'text' }
      )
      .subscribe();
  }
}
