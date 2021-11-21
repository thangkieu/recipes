import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class RecipeService implements OnInit {
  activeRecipe!: Recipe;
  recipeCollection!: AngularFirestoreCollection<Recipe>;
  recipes!: Observable<Recipe[]>;

  activeRecipeChanged = new EventEmitter();

  constructor(private firestore: AngularFirestore) {
    this.recipeCollection = this.firestore.collection<Recipe>('recipes');

    const doc = this.recipeCollection.doc();

    this.recipes = this.recipeCollection.valueChanges();
    this.recipeCollection.get().subscribe((value) => {
      console.log('value', value);
    });
  }

  ngOnInit() {}

  addNewRecipe(recipe: Recipe) {
    const id = this.firestore.createId();

    this.recipeCollection.add({ ...recipe, id });
  }

  setActiveRecipe(recipe: Recipe) {
    console.log('set active service');
    this.activeRecipe = recipe;

    this.activeRecipeChanged.emit();
  }

  removeRecipe(recipeId: string) {
    this.recipeCollection.doc(recipeId).delete();
  }
}
