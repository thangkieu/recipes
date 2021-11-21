import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  data!: Recipe;
  subscription!: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.data = this.recipeService.activeRecipe;
    this.subscription = this.recipeService.activeRecipeChanged
      .pipe(map((a) => console.log('pipe', a)))
      .subscribe(this.onActiveRecipeChanged);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onActiveRecipeChanged = () => {
    this.data = this.recipeService.activeRecipe;
  };

  remove(e: Event) {
    e.preventDefault();
    console.log(this.data);
    this.recipeService.removeRecipe(this.data.id);
  }
}
