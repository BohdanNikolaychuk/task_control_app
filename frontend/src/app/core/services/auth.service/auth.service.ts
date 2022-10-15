import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ILogin, IRegister } from './../../interface/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token!: string;

  public MAIN_URL!: string;

  constructor(private http: HttpClient) {
    this.MAIN_URL = environment.MIAN_URL;
  }

  register(FormData: IRegister) {
    console.log(FormData);

    return this.http.post(`${this.MAIN_URL}register`, FormData);
  }

  login(FormData: ILogin): Observable<{ jwt_token: string }> {
    return this.http.post(`${this.MAIN_URL}login`, FormData).pipe(
      tap(({ jwt_token }: any) => {
        localStorage.setItem('SeesionUser', jwt_token);
        this.setToken(jwt_token);
      })
    );
  }

  logOut() {
    localStorage.clear();
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
