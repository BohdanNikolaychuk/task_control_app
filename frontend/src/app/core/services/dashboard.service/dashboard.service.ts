import { Injectable } from '@angular/core';
import { WebRequestService } from './../web-request.service/web-request.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private webRequest: WebRequestService) {}

  getDashBoards() {
    return this.webRequest.get('dashboards');
  }
  createDashBoard(name: string) {
    return this.webRequest.post('dashboards', { name });
  }
  deleteDashBoard(id: string) {
    return this.webRequest.delete(`dashboards/${id}`);
  }
  // boards

  getBoard(dashId: string) {
    return this.webRequest.get(`dashboards/${dashId}/boards`);
  }

  createBoard(dashId: string, name: string) {
    return this.webRequest.post(`dashboards/${dashId}/boards`, { name });
  }
}
