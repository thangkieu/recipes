import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { RecipeService } from 'src/app/services/recipe.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription!: Subscription;
  dataSub!: Subscription;

  constructor(
    private loadingService: LoadingService,
    private activeRoute: ActivatedRoute,
    private recipesService: RecipeService
  ) {}

  ngOnInit(): void {
    this.loadingService.toggle(true);

    this.dataSub = this.recipesService.getRecipes().subscribe((value) => {
      this.loadingService.toggle(false);
      this.recipes = value;
    });
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
