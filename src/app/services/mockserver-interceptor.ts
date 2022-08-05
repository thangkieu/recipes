import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MockServerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const req = request.clone({
      url: 'http://localhost:3000' + request.url,
    });

    return next.handle(req);
  }
}
