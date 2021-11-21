import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Recipe } from '../components/recipes/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private service: RecipeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> | Recipe {
    const id = route.paramMap.get('id');

    if (id) return this.service.getRecipe(id);

    return Promise.reject();
  }
}
