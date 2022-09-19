import { environment as env} from './../../../environments/environment.prod';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ErrorHandlingService } from '../services/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiRoot : string = 'https://httpbin.org';

  headers? : HttpHeaders;
  constructor(private http : HttpClient, private handleError : ErrorHandlingService) {
    // بدل ما اكرر ال header فى كل request
    const headers = { guest : 'true', language : 'en'};
    this.headers = new HttpHeaders(headers);
  }
  // get
  getMethod(){
    console.log(`${this.apiRoot}/get`);
    // return this.http.get(`${this.apiRoot}/get`);
    return this.http.get(`${this.apiRoot}/get`,{
      params: {page :'20'},
      headers : { guest : 'true'}
    });
  }
  // delete
  deleteMethod(){
    console.log(`${this.apiRoot}/delete`);
    // return this.http.delete(`${this.apiRoot}/delete`);
    return this.http.delete(`${this.apiRoot}/delete`,{
      params: {page :'10'},
      headers : { guest : 'false'}
    });
  }
  // post
  postMethod(){
    return this.http.post(`${this.apiRoot}/post`, {age:20}, {
      params : {page : '10'},
      headers: this.headers
    }).pipe( catchError(this.handleError.loggingError))
  }

  // put
  putMethod(){
    return this.http.put(`${this.apiRoot}/put`, {age:25}, {
      params : {page : '10'},
      headers: this.headers
    })
  }
  // -----
  // progress of a request
  getProgress(){
    const req = new HttpRequest(
      'GET',
      `${this.apiRoot}/get`, 
      {reportProgress : true})
    return this.http.request(req);
  }
}
