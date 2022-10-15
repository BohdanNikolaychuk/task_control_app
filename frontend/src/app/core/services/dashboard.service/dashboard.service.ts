import { Injectable } from '@angular/core';

import { IDashBoard } from '../../interface/IDashBoard';
import { IDashBoardForm } from '../../interface/IForm';

import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public MAIN_URL!: string;

  constructor(private http: HttpClient) {
    this.MAIN_URL = environment.MIAN_URL;
  }

  getDashBoards(): Observable<IDashBoard[]> {
    return this.http
      .get<IDashBoard[]>(`${this.MAIN_URL}dashboards`)
      .pipe(shareReplay(1));
  }

  createDashBoard(formData: IDashBoardForm) {
    return this.http.post(`${this.MAIN_URL}dashboards`, formData);
  }

  deleteDashBoard(id: string) {
    return this.http.delete(`${this.MAIN_URL}dashboards/${id}`);
  }

  editDashBoard(id: string, name: string) {
    return this.http.patch(
      `${this.MAIN_URL}dashboards/${id}`,
      { name },
      {
        responseType: 'text',
      }
    );
  }
}
