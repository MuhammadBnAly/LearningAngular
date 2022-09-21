import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.observs();
  }

  person1 = { fname: 'user 1' };
  person2 = { fname: 'user 2' };
  observs(){
console.log('before observs');
    const obs$ = new Observable( subscriber => {
      subscriber.next('in observable 1');
      subscriber.next('in observable 2');
      setTimeout(() => {
        subscriber.next('in observable async')
      }, 2000);
    });
    console.log('after observable');
    console.log('before first trigger');
    obs$.subscribe( message => {
      console.log(this.person1.fname + message);
      
    })
    

  }


}
