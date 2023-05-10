import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/modelo/Interfaces';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon/typings/icon-registry';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  private user!: User;
  public loading: boolean=false;
  private hide: boolean = false;
  // isValidFormSubmitted = null;
  isLoginError: boolean = false;
  userForm = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  onSubmit(userName, password) {
    this.loading = true;
  }
}
