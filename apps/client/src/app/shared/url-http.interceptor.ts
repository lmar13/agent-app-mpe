import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UrlHttpInterceptor implements HttpInterceptor {
  private static readonly API_URL = 'http://localhost:3000/api';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({ url: UrlHttpInterceptor.API_URL + request.url })
    );
  }
}
