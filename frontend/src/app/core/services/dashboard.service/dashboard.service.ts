import { Injectable } from '@angular/core';
import { WebRequestService } from './../web-request.service/web-request.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private webRequest: WebRequestService) {}
}
