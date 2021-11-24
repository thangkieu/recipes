import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeResolver } from 'src/app/services/RecipeDataResolve.service';
import { RecipesResolver } from 'src/app/services/RecipesDataResolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipes/add', component: RecipeEditComponent, pathMatch: 'add' },
  {
    path: 'recipes/:id',
    resolve: { data: RecipeResolver },
    children: [
      {
        path: '',
        component: RecipeDetailComponent,
      },
      {
        path: 'edit',
        component: RecipeEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
