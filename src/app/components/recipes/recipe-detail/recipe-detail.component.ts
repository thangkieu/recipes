import { Observable, Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { UserService } from 'src/app/services/user.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  data!: Recipe;
  subscription!: Subscription;
  recipeId: string;
  isLoggedIn!: Observable<boolean>;

  checkedItems!: string[];

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    public userService: UserService,
    private loadingService: LoadingService
  ) {
    this.recipeId = activeRoute.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isAuthenticated();

    this.subscription = this.activeRoute.data.subscribe((data) => {
      this.data = data['data'];

      this.loadingService.toggle(false);
      this.checkedItems = this.data.ingredients;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  remove(e: Event) {
    e.preventDefault();

    this.recipeService.removeRecipe(this.recipeId).then(() => {
      this.router.navigate(['/']);
    });
  }

  addIngredients() {
    this.shoppingListService.add(this.checkedItems);
  }

  onToggleIngredient(e: Event) {
    const input = e.target as HTMLInputElement;
    const { checked, value } = input;

    if (checked) {
      this.checkedItems.push(value);
    } else {
      this.checkedItems = this.checkedItems.filter((item) => item !== value);
    }
  }
}
