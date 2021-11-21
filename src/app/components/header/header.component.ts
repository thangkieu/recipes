import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerEl', { static: true }) headerEl!: ElementRef;
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.isAuthenticated().subscribe({
      next: (loggedIn: boolean) => {
        this.isLoggedIn = loggedIn;
      },
    });
  }

  logout(e: Event) {
    e.preventDefault();

    this.userService.logout();
  }
}
