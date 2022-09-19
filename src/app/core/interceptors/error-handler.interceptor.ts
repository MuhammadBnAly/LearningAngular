import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Error Handler here', request, next);
    
    return next.handle(request).pipe( catchError( (err) => {
      console.log('error is : ', err);
      return of(err);
    }));
  }
}
