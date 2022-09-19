import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  private theValue : string = 'SHABAN';
  constructor() { }
  logging(){
    return `I am coming from Logging Service, value is ${this.theValue}`;
  }
}
