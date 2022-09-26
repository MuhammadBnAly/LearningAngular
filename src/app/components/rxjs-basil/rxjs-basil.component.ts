import { Component, OnInit } from '@angular/core';
import { count, delay, every, from, interval, of, range, tap, EMPTY, isEmpty, first, last, take, min, max, find, findIndex, elementAt, takeLast, takeUntil, timer, takeWhile, skip, skipLast, skipWhile, skipUntil, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, sample, map, concatAll } from 'rxjs';

@Component({
  selector: 'app-rxjs-basil',
  templateUrl: './rxjs-basil.component.html',
  styleUrls: ['./rxjs-basil.component.scss']
})
export class RxjsBasilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.from_();
    // this.of_();
    // this.interval_();
    // this.range_();
    // this.tap_();
  }

  // ------------------------------ Creation Operators --------------------------------------
  // from
  from_(){
    from([1,2,3,4]).subscribe( console.log);
    from('my name is Ali').subscribe( console.log);
  }
  // of
  of_(){
    of([1,2], 20.5, 'Ali').subscribe( console.log)
  }
  // interval
  interval_(){
    interval(500).subscribe( console.log)
  }
  // range
  range_(){
    range(1, 10).subscribe( console.log)
  }
  // ------------------------------ Utilities Operators --------------------------------------
  // tap
  tap_(){
    of(1,2,3)
    .pipe(
      tap(x => {
          console.log('from TAP operator');
          return 25; // not executed // tap not effect to the stream // it uses to debug
        })
    )
    .subscribe( console.log );
  }
  // count
  count_(){
    range(1,50)
    .pipe(
      count( x => x % 2 == 0)
      // count(); // or
    )
    .subscribe( console.log)
  }
  // delay
  delay_(){
    of(1,2,3).pipe( delay(2000) ).subscribe(console.log)
  }
  // every
  every_(){
    of(1,2,3).pipe( every(x => x % 2 == 0) ).subscribe(console.log) // false
    of(2,4,6).pipe( every(x => x % 2 == 0) ).subscribe(console.log) // true
  }
  // isEmpty
  isEmpty_(){
    of(1,2,3).pipe( isEmpty() ).subscribe(console.log)
    EMPTY.pipe( isEmpty()).subscribe(console.log)
  }
  // ------------------------------ Filtering Operators (Single) --------------------------------------
  // first
  first_(){
    of(2,4,6,8,10).pipe(first()).subscribe(console.log);
    of(2,4,6,8,10).pipe(first(x => x % 2 == 0 )).subscribe(console.log);
    of(2,4,6,8,10).pipe(first(x => x % 2 == 1 , -1))
      .subscribe({next : console.log, error : err => console.log('error' + err)});
    //
    const emp = [{name:'Ali', sal:1000, age : 26},{name:'Mohamed', sal:2000, age : 21}]
    from(emp)
      .pipe(first(x => x.name.toLowerCase().startsWith('l'))).subscribe(console.log);
  }
  // last
  last_(){
    of(2,4,6,8,10).pipe(last(x => x % 2 == 0)).subscribe(console.log);
    interval(100).pipe(take(5), last()).subscribe(console.log);
  }
  // min
  min_(){
    of(3,6,2,5,9,1).pipe( min() ).subscribe(x => console.log(x));
    //
    from([{id:1, age:12},{id:2, age:22},{id:3, age:32}])
    .pipe(
      min( (a,b) => a.age < b.age ? -1 : 1),
    ).subscribe( x => console.log(x.id));
  }
  // max
  max_(){
    of(3,6,2,5,9,1).pipe( max() ).subscribe(x => console.log(x));
  }
  // find
  find_(){
    from([{id:1, age:12},{id:2, age:22},{id:3, age:32},]).pipe(
      find( x => x.age >= 20)
    ).subscribe(console.log);
  }
  // findIndex
  findIndex_(){
    from([{id:1, age:12},{id:2, age:22},{id:3, age:32},]).pipe(
      findIndex( x => x.age >= 20)
    ).subscribe(console.log);
  }
  // elementAt
  elementAt_(){
    of(2,4,6,8,10).pipe(elementAt(12 , -1)).subscribe(console.log)
  }
  // ------------------------------ Filtering Operators (Multiple) --------------------------------------
  // take
  take_(){
    interval(100).pipe( take(5) ).subscribe( console.log)
  }
  takeLast_(){
    range(1, 100).pipe( takeLast(5) ).subscribe( console.log)
  }
  // takeUntil
  takeUntil_(){
    interval(100)
    .pipe( takeUntil( timer(1500) ) ).subscribe( console.log)
  }
  // takeWhile
  takeWhile_(){
    from([1,2,3,4,5,6,7,8,9,10]).pipe( takeWhile(x => x < 5) ).subscribe(console.log);
  }
  // skip
  skip_(){
    interval(100).pipe( skip(5) ).subscribe( console.log);
    of(1, 2).pipe( skip(5) ).subscribe(
      // {
      // error : err => console.log('error' + err),
      // next : console.log,
      // complete : console.log('completed')}
      );
  }
  // skipLast
  skipLast_(){
    interval(100).pipe( skipLast(20) ).subscribe( console.log);
  }
  // skipUntil
  skipUntil_(){
    interval(100).pipe( skipUntil( timer(450) ) ).subscribe( console.log);
  }
  //
  skipWhile_(){
    from([1,2,3,4,5,6,7,8,9,10]).pipe( skipWhile( (x , i) => x < 5) ).subscribe(console.log);
    from([1,2,3,4,5,6,7,8,9,10]).pipe( skipWhile( (_ , i) => i!== 7) ).subscribe(console.log);
  }
  // distinct
  distinct_(){
    of(4,3,7,1,6,3,2,5,2,1,3,2,1,9,6,5,4).pipe( distinct() ).subscribe( x => console.log(x));
    of({id:1, name:'ali'},{id:2, name:'ola'},{id:1, name:'ali'},).pipe(
      distinct( x => x.name)
    ).subscribe(x => console.log(x.name))
  }
  // distinctUntilChanged
  distinctUntilChanged_(){
    of(1,1,2,2,3,4,3).pipe( distinctUntilChanged() ).subscribe( x => console.log(x));
    of({id:1, name:'ali'},{id:2, name:'ali'},{id:3, name:'hani'},).pipe(
      distinctUntilChanged( ( x , curr ) => x.name === curr.name)
    ).subscribe( console.log )
  }
  // distinctUntilChanged
  distinctUntilKeyChanged_(){
    of({id:1, name:'ali'},{id:2, name:'ali'},{id:3, name:'hani'},).pipe(
      distinctUntilKeyChanged( 'name')
    ).subscribe( console.log );
    //
    of({id:1, name:'ali'},{id:2, name:'ali'},{id:3, name:'hani'},).pipe(
      distinctUntilKeyChanged( 'name', (x , y) => x.substring(0,2) === y.substring(0,2))
    ).subscribe( console.log );
  }
  // filter
  filter_(){
    const posts = [
      {title:'info', likes:32}, 
      {title:'fci', likes:42},
      {title:'engage', likes:12},
      {title:'marriage', likes:72} ];
    of(...posts).pipe( filter(x => x.likes >= 30)  ).subscribe(console.log)
  }
  // sample // take last emitted value
  sample_(){
    interval(100).pipe( 
      sample( interval(350) ), 
      take(5) ).subscribe(x => console.log(x))
  }
  // ------------------------------ Higher Order Observable Operators --------------------------------------
  // example 
  higherExample_(){
    const products = [{id : 1, product : 'PROD 1'},{id : 2, product : 'PROD 2'},{id : 3, product : 'PROD 3'}];
    const Ps = [1,2,3]
    from(Ps).pipe(
      map( pid => from(products).pipe( find(x => x.id == pid))),
        concatAll(),
        tap(val => console.log('tab ', val)),
        ).subscribe( console.log )
  }
  // concatAll
  concatAll_(){

  }

}
