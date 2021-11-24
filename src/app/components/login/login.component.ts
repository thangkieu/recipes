import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

type FormValue = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading: Subject<boolean> = new Subject();
  errorMessage: Subject<string> = new Subject();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    const formValue: FormValue = form.form.value;

    this.loading.next(true);
    this.errorMessage.next('');

    const subscription = this.userService
      .login(formValue.email, formValue.password)
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
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
