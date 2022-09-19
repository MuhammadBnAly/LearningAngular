import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeadersInterceptor } from "./headers.interceptor";
import { ErrorHandlerInterceptor } from './error-handler.interceptor';

export const httpInterceptorProviders = [
  {
  provide :  HTTP_INTERCEPTORS, 
  // HTTP_INTERCEPTORS (Interceptor[])
  useClass : HeadersInterceptor , 
  multi : true
}
,
{
  provide :  HTTP_INTERCEPTORS, 
  useClass : ErrorHandlerInterceptor , 
  multi : true
} 
];