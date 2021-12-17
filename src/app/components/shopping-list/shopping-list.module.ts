import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
  },
];

@NgModule({
  declarations: [ShoppingListComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class ShoppingListModule {}
