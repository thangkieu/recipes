import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Recipe } from '../components/recipes/recipe.model';
import { LoadingService } from './loading.service';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolver implements Resolve<Recipe[]> {
  constructor(
    private service: RecipeService,
    private loadingService: LoadingService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const id = route.paramMap.get('id');
    this.loadingService.toggle(true);

    return this.service.getRecipes();
  }
}
