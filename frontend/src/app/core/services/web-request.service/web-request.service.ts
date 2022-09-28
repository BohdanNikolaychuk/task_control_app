import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  public MAIN_URL!: string;

  constructor(private http: HttpClient) {
    this.MAIN_URL = environment.MIAN_URL;
  }

  get(url: string) {
    return this.http.get(`${this.MAIN_URL}${url}`);
  }
  post(url: string, payload: Object) {
    return this.http.post(`${this.MAIN_URL}${url}`, payload);
  }
  patch(url: string, payload: Object) {
    return this.http.patch(`${this.MAIN_URL}${url}`, payload, {
      responseType: 'text',
    });
  }
  delete(url: string) {
    return this.http.delete(`${this.MAIN_URL}${url}`);
  }
}
