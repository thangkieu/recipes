import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from './auth.service';

type UserInfo = {
  name: string;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfo!: UserInfo;

  constructor(private authService: AuthServices, private router: Router) {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getUserInfo() {
    return this.authService.getUserInfo();
  }

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('login error::', err);
      },
    });
  }

  signup(email: string, password: string) {
    this.authService.signup(email, password).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log('signup error::', error);
      },
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
    });
  }
}
