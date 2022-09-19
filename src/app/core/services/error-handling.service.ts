import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() {}
   loggingError(err : HttpErrorResponse){
    if(err.error instanceof ErrorEvent){
      console.log("Client", err);
    }
    else{
      console.log("Server", err);
    }
    return throwError('throw error, something went wrong');
   }
}
