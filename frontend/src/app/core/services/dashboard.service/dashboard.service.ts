import { Injectable } from '@angular/core';
import { IForm } from '../../interface/IForm';
import { WebRequestService } from './../web-request.service/web-request.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private webRequest: WebRequestService) {}

  getDashBoards() {
    return this.webRequest.get('dashboards');
  }
  createDashBoard(formData: IForm) {
    return this.webRequest.post('dashboards', formData);
  }
  deleteDashBoard(id: string) {
    return this.webRequest.delete(`dashboards/${id}`);
  }

  editDashBoard(id: string, name: string) {
    return this.webRequest.patch(`dashboards/${id}`, { name });
  }

  // boards

  getBoard(dashId: string) {
    return this.webRequest.get(`dashboards/${dashId}/boards`);
  }
  deleteBoard(dashId: string, boardId: string) {
    return this.webRequest.delete(`dashboards/${dashId}/boards/${boardId}`);
  }
  editBoard(dashId: string, boardId: string, name: string) {
    return this.webRequest.patch(`dashboards/${dashId}/boards/${boardId}`, {
      name,
    });
  }

  createBoard(dashId: string, name: Object, status: string) {
    return this.webRequest.post(`dashboards/${dashId}/boards`, {
      name,
      status,
    });
  }
}
