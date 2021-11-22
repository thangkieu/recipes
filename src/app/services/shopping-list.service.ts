import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService implements OnInit {
  listArr: string[] = [];
  list$: Subject<string[]> = new Subject();

  constructor() {}

  ngOnInit() {}

  add(ingredients: string[]) {
    this.listArr.push(...ingredients);
    this.list$.next(this.listArr);
  }

  update(index: number, value: string) {
    this.listArr.splice(index, 1, value);
    this.list$.next(this.listArr);
  }

  remove(index: number) {
    const newList = [...this.listArr];
    newList.splice(index, 1);
    this.listArr = newList;

    this.list$.next(newList);
  }
}
