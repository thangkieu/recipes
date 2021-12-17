import { Subject, Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { RecipeService } from 'src/app/services/recipe.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  recipe = new Recipe('', '', '', '', [], '');
  fb = new FormBuilder();
  recipeId: string;

  subscription!: Subscription;
  authSubscription!: Subscription;

  doing: Subject<boolean> = new Subject<boolean>();

  // ingredients: { name: string; amount: string }[] = [];
  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private routeService: Router
  ) {
    this.recipeId = this.activeRoute.snapshot.paramMap.get('id') || '';
    this.doing.next(false);
  }

  ngOnInit(): void {
    this.subscription = this.activeRoute.data.subscribe(
      (recipeDetails: any) => {
        if (recipeDetails.data) this.recipe = recipeDetails.data;

        this.initForm();

        this.loadingService.toggle(false);
      }
    );

    // TODO: add user to recipe
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.recipe.name, Validators.required],
      description: [this.recipe.description],
      directions: [this.recipe.directions, Validators.required],
      photoUrl: [this.recipe.photoUrl],
      ingredients: this.fb.array(
        this.recipe.ingredients.map((ing) =>
          this.fb.control(ing, Validators.required)
        )
      ),
    });
  }

  submit() {
    this.doing.next(true);

    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      // update
      this.recipeService
        .update(id, this.form.value)
        .then(this.done)
        .catch(this.done);
      return;
    }
    this.recipeService
      .addNewRecipe(this.form.value)
      .then(this.done)
      .catch(this.done);
    this.recipeService.httpAddNewRecipes(this.form.value).subscribe({
      next: this.done,
      error: this.done,
    });
  }

  done = () => {
    this.doing.next(false);
    this.routeService.navigate([`/${this.recipeId}`]);
  };

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient(value: string = '') {
    this.ingredients.push(this.fb.control(value, Validators.required));
  }

  onIngredientKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();

      this.addIngredient();
    }
  }

  remove(index: number) {
    this.ingredients.removeAt(index);
    this.recipe.ingredients.splice(index, 1);
  }

  onPaste(e: ClipboardEvent) {
    e.preventDefault();

    const data = e.clipboardData?.getData('text').trim().split('\n') || [];

    const values = data.map((ing, idx) => {
      const str = ing.trim().replace(/^-\s\[[\s|x]\]\s/g, '');

      if (idx !== 0) {
        this.addIngredient();
      }

      return str;
    });

    this.ingredients.setValue(values);
  }
}
