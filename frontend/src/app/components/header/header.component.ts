import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loginStatus: boolean = false;
  name: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
    });

    this.loginStatus = this.authService.isAuth();
    this.name = localStorage.getItem('Name');
  }

  logOut() {
    this.authService.logOut();
    this.loginStatus = false;
  }
}
