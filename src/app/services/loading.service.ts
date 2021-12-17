import { Subject } from 'rxjs';

import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService implements OnInit {
  loading: Subject<boolean> = new Subject();

  constructor() {}

  ngOnInit() {
    this.loading.next(false);
  }

  toggle(state: boolean) {
    this.loading.next(state);
  }
}
