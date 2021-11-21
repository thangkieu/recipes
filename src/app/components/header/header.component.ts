import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerEl', { static: true }) headerEl!: ElementRef;
  isLoggedIn: boolean = false;
  shoppingListNo: number = 0;

  constructor(
    private userService: UserService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.userService.isAuthenticated().subscribe({
      next: (loggedIn: boolean) => {
        this.isLoggedIn = loggedIn;
      },
    });

    this.shoppingListService.list$.subscribe((item) => {
      this.shoppingListNo = item.length;
    });
  }

  logout(e: Event) {
    e.preventDefault();

    this.userService.logout();
  }
}
