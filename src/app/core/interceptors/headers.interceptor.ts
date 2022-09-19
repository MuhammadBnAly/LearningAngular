import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // here is your code
    // before
    console.log('Herder Interceptor here ', request, next);
    // token
    const myToken = 'ACASasmasdfaFASFasvasfvm23452562sdfsvs';
    // trying to handle HTTP
    const modifiedURLRequest = request.clone({
      url : request.url.replace('http', 'https'),
      headers : request.headers.set('authorization', myToken)
    });
    console.log('after replace https', modifiedURLRequest, next);
    //
    // return next.handle(request);
    return next.handle(modifiedURLRequest);
  }
}
