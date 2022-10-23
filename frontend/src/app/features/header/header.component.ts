import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './../../core/services/auth.service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loginStatus;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
    });
  }

  ngOnDestroy(): void {
    this.authService.isLoggedIn.unsubscribe();
  }
}
