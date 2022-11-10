import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IRegister } from 'src/app/core/interface/IUser';
import { AuthService } from 'src/app/core/services/auth.service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  subscription$!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      fullName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  register(formData: IRegister) {
    this.subscription$ = this.authService
      .register(formData)
      .subscribe((newDashBoard) => {
        this.router.navigate(['login']);
      });
  }
}
