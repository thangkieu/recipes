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
        this.shoppingListService.listArr.map((item) => this.fb.control(item))
      ),
    });
  }

  get items() {
    return this.form.get('items') as FormArray;
  }

  ngOnDestroy() {}

  addIngredient(value: string = '') {
    this.items.push(this.fb.control(value));
    this.shoppingListService.add([value]);
  }

  submit() {}

  onKeydown(e: KeyboardEvent, idx: number) {
    if (e.key === 'Enter') {
      e.preventDefault();

      this.onBlur(idx);
      this.addIngredient();
    }
  }

  onBlur(idx: number) {
    this.shoppingListService.update(idx, this.form.value.items[idx]);
  }

  remove(i: number) {
    this.shoppingListService.remove(i);
    this.items.removeAt(i);
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

    this.items.setValue(values);
  }
}
