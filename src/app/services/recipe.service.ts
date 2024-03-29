import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore';

import { Recipe } from '../components/recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService implements OnInit {
  activeRecipe!: Recipe;
  recipeCollection!: AngularFirestoreCollection<Recipe>;
  // recipes!: Observable<Recipe[]>;

  activeRecipeChanged = new EventEmitter();

  constructor(private firestore: AngularFirestore, private http: HttpClient) {
    this.recipeCollection = this.firestore.collection<Recipe>('recipes');
  }

  ngOnInit() {}

  getRecipes(): Observable<Recipe[]> {
    return this.httpGetRecipes();

    // return this.recipeCollection
    //   .get()
    //   .pipe(map((item) => item.docs))
    //   .pipe(map((item) => item.map((i) => ({ ...i.data(), id: i.id }))));
  }

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
  // http
  httpGetRecipes() {
    return this.http.get<Recipe[]>('/recipes');
  }

  httpAddNewRecipes(recipe: Recipe) {
    return this.http.post('/recipes', recipe);
  }
}
