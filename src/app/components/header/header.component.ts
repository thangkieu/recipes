import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('headerEl', { static: true }) headerEl!: ElementRef;
  isLoggedIn!: Observable<boolean>;
  shoppingListNo: number = 0;
  subscription!: Subscription;

  constructor(
    private userService: UserService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.userService.isAuthenticated();

    this.subscription = this.shoppingListService.list$.subscribe((item) => {
      this.shoppingListNo = item.length;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout(e: Event) {
    e.preventDefault();

    this.userService.logout();
  }
}
