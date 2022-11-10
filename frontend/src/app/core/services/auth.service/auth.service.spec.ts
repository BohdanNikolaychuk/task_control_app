import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setToken', () => {
    const token = '123';
    let setTokenStatus = service.setToken(token);

    expect(setTokenStatus).toBeUndefined();
  });

  it('setToken and get Token', () => {
    const token = '123';
    service.setToken(token);
    const getTokenStatus = service.getToken();
    expect(getTokenStatus).toBe(token);
  });

  it('isAuth', () => {
    let isAuth = service.isAuth();

    expect(isAuth).toBe(false);
    expect(isAuth).toBeFalse();
  });

  it('setToken isAuth', () => {
    const token = '123';
    service.setToken(token);
    let isAuth = service.isAuth();

    expect(isAuth).toBe(true);
    expect(isAuth).toBeTrue();
  });
});
