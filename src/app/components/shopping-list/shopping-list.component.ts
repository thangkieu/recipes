import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [{ name: 'Onion', amount: '2 trái' }];
  subscription!: Subscription;

  form!: FormGroup;

  constructor(
    private shoppingListService: ShoppingListService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array(
        this.shoppingListService.listArr.map((item) => {
          return this.fb.group({
            name: [item.name],
            amount: [item.amount],
          });
        })
      ),
    });

    // this.ingredients = this.shoppingListService.listArr;

    // this.subscription = this.shoppingListService.list$.subscribe((list) => {
    //   this.ingredients = list;
    // });
  }

  get items() {
    return this.form.get('items') as FormArray;
  }
  ngOnDestroy() {}

  addIngredient() {
    this.items.push(
      this.fb.group({
        name: [''],
        amount: [''],
      })
    );
  }

  submit() {}

  onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.addIngredient();
    }
  }

  remove(i: number) {
    this.shoppingListService.remove(i);
    this.items.removeAt(i);
  }
}
