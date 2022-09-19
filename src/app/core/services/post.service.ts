import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  id?:number;
  getRandomPost(){
    this.id = Math.floor(Math.random()*100);
    return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${this.id}`);
  }
  getPostById(id : number){
    return ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  constructor() { }
}
