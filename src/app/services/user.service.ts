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
    return this.authService.login(email, password);
  }

  signup(email: string, password: string) {
    return this.authService.signup(email, password);
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
    });
  }
}
