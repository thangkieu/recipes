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
      url:
        'https://my-json-server.typicode.com/thangkieu/mockjsonserver' +
        request.url,
    });

    return next.handle(req);
  }
}
