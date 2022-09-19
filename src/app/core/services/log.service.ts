import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  myLog(){
    console.log("this is from Service");
  }
}
