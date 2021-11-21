import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() // decorator to exposure data, to receive from outside world
  data!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onClick(event: Event) {
    event.preventDefault();

    this.recipeService.setActiveRecipe(this.data);
  }
}
