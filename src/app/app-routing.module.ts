import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./components/shopping-list/shopping-list.module').then(
        (s) => s.ShoppingListModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/recipes/recipes.module').then((s) => s.RecipeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
