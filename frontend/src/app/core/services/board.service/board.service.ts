import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  public MAIN_URL!: string;
  constructor(private http: HttpClient) {
    this.MAIN_URL = environment.MIAN_URL;
  }

  getBoard(dashId: string) {
    return this.http.get(`${this.MAIN_URL}dashboards/${dashId}/boards`);
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
