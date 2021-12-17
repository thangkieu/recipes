import { Observable } from 'rxjs';

import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Recipe } from '../components/recipes/recipe.model';
import { LoadingService } from './loading.service';
import { RecipeService } from './recipe.service';

// @Injectable({ providedIn: 'root' })
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
