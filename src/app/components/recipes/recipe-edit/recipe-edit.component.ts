import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
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
  // ingredients: { name: string; amount: string }[] = [];
  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute
  ) {
    this.recipeId = this.activeRoute.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.subscription = this.activeRoute.data.subscribe(
      (recipeDetails: any) => {
        if (recipeDetails.data) this.recipe = recipeDetails.data;

        this.initForm();
      }
    );
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
          this.fb.group({
            name: [ing.name, Validators.required],
            amount: [ing.amount, Validators.required],
          })
        )
      ),
    });
  }

  submit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      // update
      this.recipeService.update(id, this.form.value);
      return;
    }

    this.recipeService.addNewRecipe(this.form.value);
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient() {
    const form = this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
    });

    this.ingredients.push(form);
  }

  onIngredientKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.addIngredient();
    }
  }

  remove(index: number) {
    this.ingredients.removeAt(index);
    this.recipe.ingredients.splice(index, 1);
  }
}
