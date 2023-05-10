import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  user: User;
  // isValidFormSubmitted = null;
  isLoginError: boolean = false;
  userForm = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  public loading: boolean;
  hide: boolean;

  onSubmit(userName, password) {
    this.loading = true;
  }
}
