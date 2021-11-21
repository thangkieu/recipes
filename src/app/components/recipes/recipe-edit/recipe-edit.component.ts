import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  form!: FormGroup;
  recipe = new Recipe('', '', '', '', [], '');
  fb = new FormBuilder();

  // ingredients: { name: string; amount: string }[] = [];

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.recipe.name, Validators.required],
      description: [this.recipe.description],
      directions: [this.recipe.directions, Validators.required],
      photoUrl: [this.recipe.photoUrl],
      ingredients: this.fb.array([]),
    });
  }

  submit() {
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
}
