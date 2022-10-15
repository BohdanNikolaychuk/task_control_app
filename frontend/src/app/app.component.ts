import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'task_app';
  constructor(private authService: AuthService) {}
  ngOnInit() {
    const potentialToken = localStorage.getItem('SeesionUser');
    if (potentialToken !== null) {
      this.authService.setToken(potentialToken);
    }
  }
}
