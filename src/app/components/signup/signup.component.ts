import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

type FormValue = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, router: Router) {}

  ngOnInit(): void {}

  signup(ngForm: NgForm) {
    const formValue: FormValue = ngForm.form.value;

    this.userService.signup(formValue.email, formValue.password);
  }
}
