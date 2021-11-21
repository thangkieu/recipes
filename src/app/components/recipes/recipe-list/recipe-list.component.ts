import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.recipes = this.recipeService.recipes;
    this.recipeService.recipes.subscribe((values) => {
      this.recipes = values;
    });
  }
}
