import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WebRequestService } from '../web-request.service/web-request.service';
import { ILogin } from './../../interface/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private webRequest: WebRequestService) {}

  private token!: string;
  login(FormData: ILogin): Observable<{ jwt_token: string }> {
    return this.webRequest.post('login', FormData).pipe(
      tap(({ jwt_token }: any) => {
        localStorage.setItem('SeesionUser', jwt_token);
        this.setToken(jwt_token);
      })
    );
  }

  setToken(jwt_token: string) {
    this.token = jwt_token;
  }

  gettoken() {
    return !!localStorage.getItem('SeesionUser');
  }
}
