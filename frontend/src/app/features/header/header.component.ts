import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/services/auth.service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuthUser = null;

  ngOnInit(): void {
    this.isAuthUser = this.authService.isAuth();
  }

  logOut() {
    this.authService.logOut();
  }
}
