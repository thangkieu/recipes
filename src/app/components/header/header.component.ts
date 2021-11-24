import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
  routeSubscription!: Subscription;

  showLoginBtn: boolean = false;

  constructor(
    private userService: UserService,
    private shoppingListService: ShoppingListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoggedIn = this.userService.isAuthenticated();

    this.subscription = this.shoppingListService.list$.subscribe((item) => {
      this.shoppingListNo = item.length;
    });

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showLoginBtn = !['/login', '/signup'].includes(event.url);
      }
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
