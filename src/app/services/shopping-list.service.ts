import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../components/shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService implements OnInit {
  listArr: Ingredient[] = [new Ingredient('Onion', '2 trái')];
  list$: Subject<Ingredient[]> = new Subject();

  constructor() {}

  ngOnInit() {}

  add(ingredients: Ingredient[]) {
    this.listArr.push(...ingredients);
    this.list$.next(this.listArr);
  }

  remove(index: number) {
    const newList = [...this.listArr];
    newList.splice(index, 1);
    this.listArr = newList;

    this.list$.next(newList);
  }
}
