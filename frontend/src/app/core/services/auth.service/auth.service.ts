import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ILogin, IRegister } from './../../interface/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: string;
  public MAIN_URL!: string;
  isLoggedIn = new BehaviorSubject(false);

  constructor(private http: HttpClient) {
    this.MAIN_URL = environment.MIAN_URL;
  }

  register(FormData: IRegister) {
    return this.http.post(`${this.MAIN_URL}register`, FormData);
  }

  login(FormData: ILogin): Observable<{ jwt_token: string }> {
    return this.http.post(`${this.MAIN_URL}login`, FormData).pipe(
      tap(({ jwt_token }: any) => {
        localStorage.setItem('SeesionUser', jwt_token);
        this.setToken(jwt_token);
        this.isLoggedIn.next(this.isAuth());
      })
    );
  }

  logOut() {
    this.isLoggedIn.next(this.isAuth());
    localStorage.removeItem('SeesionUser');
  }

  setToken(jwt_token: string) {
    this.token = jwt_token;
  }

  getToken(): string {
    return this.token;
  }

  isAuth(): boolean {
    return !!this.token;
  }
}
