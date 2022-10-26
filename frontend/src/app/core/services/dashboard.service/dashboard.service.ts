import { Injectable } from '@angular/core';

import { IDashBoard } from '../../interface/IDashBoard';
import { IDashBoardForm } from '../../interface/IForm';

import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private dashBoardsGeted = false;
  private dashBoards = new BehaviorSubject<IDashBoard[]>([]);

  constructor(private http: HttpClient) {}

  getDashBoardsObs(): Observable<IDashBoard[]> {
    return this.dashBoards;
  }

  getDashBoardsValue() {
    return this.dashBoards.getValue();
  }

  setDashBoards(dashBoards: IDashBoard[]) {
    this.dashBoards.next(dashBoards);
  }

  clearDashBoardsRequestState() {
    this.dashBoardsGeted = false;
  }

  // fetch data

  getDashBoards() {
    if (!this.dashBoardsGeted) {
      this.http
        .get<IDashBoard[]>(`${environment.MIAN_URL}dashboards`)
        .subscribe((dashBoards: IDashBoard[]) => {
          this.setDashBoards(dashBoards);
          this.dashBoardsGeted = true;
        });
    }
  }
  // end fetch data

  //create DashBoard
  createDashBoard(formData: IDashBoardForm) {
    this.http
      .post<IDashBoard>(`${environment.MIAN_URL}dashboards`, formData)
      .subscribe((newDashBoard: IDashBoard) => {
        const newDashBoards = [...this.getDashBoardsValue(), newDashBoard];

        this.setDashBoards(newDashBoards);
      });
  }
  //  end create DashBoard
  deleteDashBoard(id: string) {
    return this.http
      .delete(`${environment.MIAN_URL}dashboards/${id}`)
      .subscribe(() => {
        let filteredDash = this.getDashBoardsValue().filter(
          (board) => board._id !== id
        );
        this.setDashBoards(filteredDash);
      });
  }

  editDashBoard(id: string, name: string) {
    return this.http
      .patch(`${environment.MIAN_URL}dashboards/${id}`, { name })
      .subscribe(() => {
        let boardTemp = this.getDashBoardsValue().map((board) => {
          if (board._id === id) {
            return { ...board, name };
          } else {
            return board;
          }
        });
        this.setDashBoards(boardTemp);
      });
  }
}
