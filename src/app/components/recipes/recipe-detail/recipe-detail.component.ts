import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { map, Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
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
  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
    private shoppingListService: ShoppingListService
  ) {
    this.recipeId = activeRoute.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.subscription = this.activeRoute.data.subscribe((data) => {
      this.data = data['data'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  remove(e: Event) {
    e.preventDefault();

    this.recipeService.removeRecipe(this.recipeId).then(() => {
      this.router.navigate(['/recipes']);
    });
  }

  addIngredients() {
    this.shoppingListService.add(this.data.ingredients);
  }
}
