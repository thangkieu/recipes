import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  loading: Subject<boolean> = new Subject();
  errorMessage: Subject<string> = new Subject();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signup(ngForm: NgForm) {
    const formValue: FormValue = ngForm.form.value;

    this.loading.next(true);
    this.errorMessage.next('');

    const subscription = this.userService
      .signup(formValue.email, formValue.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
          this.loading.next(false);

          subscription.unsubscribe();
        },
        error: (err) => {
          this.loading.next(false);
          this.errorMessage.next(`${err} Please try again.`);

          subscription.unsubscribe();
        },
        complete() {
          subscription.unsubscribe();
        },
      });
  }
}
