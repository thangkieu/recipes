import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor(private userService: UserService) {}
  isLoggedIn!: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn = this.userService.isAuthenticated();
  }
}
