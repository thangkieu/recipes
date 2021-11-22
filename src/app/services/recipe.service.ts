import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model';
import { map, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { getDoc } from '@angular/fire/firestore';

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

    this.recipes = this.recipeCollection.valueChanges({
      idField: 'id',
    });
  }

  ngOnInit() {}

  addNewRecipe(recipe: Recipe) {
    return this.recipeCollection.add(recipe);
  }

  update(docId: string, recipe: Recipe) {
    return this.recipeCollection.doc(docId).update(recipe);
  }

  setActiveRecipe(recipe: Recipe) {
    this.activeRecipe = recipe;

    this.activeRecipeChanged.emit();
  }

  removeRecipe(recipeId: string) {
    return this.recipeCollection.doc(recipeId).delete();
  }

  getRecipe(id: string) {
    return this.recipeCollection
      .doc(id)
      .get()
      .pipe(map((item) => item.data() as Recipe));
  }
}
