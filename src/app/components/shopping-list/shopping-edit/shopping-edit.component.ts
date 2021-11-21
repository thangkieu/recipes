import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  recipeName: string = '';
  subscription!: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.activeRecipeChanged.subscribe(
      this.onActiveRecipeChanged
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onActiveRecipeChanged = () => {
    this.recipeName = this.recipeService.activeRecipe.name;
  };
}
