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

  public MAIN_URL!: string;
  constructor(private http: HttpClient) {
    this.MAIN_URL = environment.MIAN_URL;
  }

  getDashBoardsObs(): Observable<IBoard[]> {
    return this.Boards;
  }

  getBoardsValue() {
    return this.Boards.getValue();
  }

  setBoards(dashBoards: IBoard[]) {
    this.Boards.next(dashBoards);
  }

  clearDashBoardsRequestState() {
    this.BoardsGeted = false;
  }

  getBoard(dashId: string) {
    if (!this.BoardsGeted) {
      this.http
        .get(`${this.MAIN_URL}dashboards/${dashId}/boards`)
        .subscribe((dashBoards: IBoard[]) => {
          console.log(dashBoards);

          this.setBoards(dashBoards);
          this.BoardsGeted = true;
        });
    }
  }
  deleteBoard(dashId: string, boardId: string) {
    return this.http.delete(
      `${this.MAIN_URL}dashboards/${dashId}/boards/${boardId}`
    );
  }
  editBoard(dashId: string, boardId: string, name: string) {
    return this.http.patch(
      `${this.MAIN_URL}dashboards/${dashId}/boards/${boardId}`,
      {
        name,
      }
    );
  }
  createBoard(dashId: string, name: Object, status: string) {
    return this.http.post(`${this.MAIN_URL}dashboards/${dashId}/boards`, {
      name,
      status,
    });
  }
  changeArchiveStatus(dashId: string, boardId: string, archive: boolean) {
    return this.http.patch(
      `${this.MAIN_URL}dashboards/${dashId}/boards/${boardId}`,
      {
        archive,
      }
    );
  }
}
