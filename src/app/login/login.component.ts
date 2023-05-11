import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/modelo/Interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user!: User;
  // isValidFormSubmitted = null;
  isLoginError: boolean = false;
  userForm = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  public loading: boolean = false;
  hide: boolean = false;

  onSubmit(userName: any, password: any) {
    console.log(userName + ' ' + password);
    this.loading = true;
  }
}
