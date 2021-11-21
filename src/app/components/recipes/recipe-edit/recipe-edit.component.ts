import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    console.log('values', form.form.value);
    this.recipeService.addNewRecipe(form.form.value);
  }
}
