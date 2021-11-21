import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecipeService } from 'src/app/services/recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
  ],
  imports: [CommonModule, FormsModule, RecipeRoutingModule],
  providers: [RecipeService],
})
export class RecipeModule {}
