import { Component, Directive, ElementRef, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  template: `<div
    *ngIf="loadingService.loading | async"
    class="d-flex align-items-center justify-content-center"
  >
    <p>Loading...</p>
  </div> `,
  styles: [
    `
      div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        z-index: 2;
      }
    `,
  ],
})
export class LoadingComponent implements OnInit {
  constructor(public loadingService: LoadingService) {}

  ngOnInit() {}
}
