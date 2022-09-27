import { Component, OnInit } from '@angular/core';
import { count, delay, every, from, interval, of, range, tap, EMPTY, isEmpty, first, last, take, min, max, find, findIndex, elementAt, takeLast, takeUntil, timer, takeWhile, skip, skipLast, skipWhile, skipUntil, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, sample, map, concatAll, Observable, exhaustAll, mergeAll, withLatestFrom, concatMap, mergeMap, switchMap, exhaustMap, observable, defaultIfEmpty, startWith, reduce, scan, materialize, dematerialize } from 'rxjs';

@Component({
  selector: 'app-rxjs-basil',
  templateUrl: './rxjs-basil.component.html',
  styleUrls: ['./rxjs-basil.component.scss']
})
export class RxjsBasilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    const Ps = [1,2,3];
    from(Ps).pipe(
      map( pid => from(products).pipe( find(x => x.id == pid))),
        concatAll(),
        tap(val => console.log('tab', val)),
        ).subscribe( console.log );
  }
  // concatAll
  concatAll_(){
    const clicks = new Observable( obs => {
      obs.next('click 1'),
      obs.next('click 2'),
      obs.complete()
    })
    //
    const higherOrder = clicks.pipe(
      map( () =>  interval(100).pipe( take(4) )  )
    )
    //
    const firstOrder = higherOrder.pipe( concatAll() );
    //
    firstOrder.subscribe(console.log)
    // 01231234
  }
// exhaustAll
exhaustAll_(){
  const clicks = new Observable( obs => {
    // obs.next('click 1'),
    // // case 1
    // obs.next('click 2'),
    // obs.complete()
    //
    //  case 2
    setTimeout(() => obs.next('click 3'), 600);
    setTimeout( () => obs.complete());
  })
  //
  const higherOrder = clicks.pipe(
    map( () =>  interval(100).pipe( take(4) )  )
  )
  //
  const firstOrder = higherOrder.pipe( exhaustAll() );
  //
  firstOrder.subscribe(console.log)
  // 0123  0123
}
// mergeAll
mergeAll_(){
  const clicks = new Observable( obs => {
    obs.next('click 1'),
    obs.next('click 2'),
    obs.complete()
  })
  //
  const higherOrder = clicks.pipe(
    map( () =>  interval(100).pipe( take(4) )  )
  )
  //
  const firstOrder = higherOrder.pipe( mergeAll() );
  //
  firstOrder.subscribe(console.log)
  // 00112233 
}
// concatAll
withLatestFrom_(){
  const clicks = new Observable( obs => {
    setTimeout(() => obs.next('click 1'), 1000);
    setTimeout(() => obs.next('click 2'), 1500);
    setTimeout(() => obs.complete(), 2000);
  })
  //
  const timer = interval(500);
  const result = clicks.pipe( withLatestFrom( timer ) )
  result.subscribe(console.log);
}
  // ------------------------------ Mapping Operator --------------------------------------
  // 
  ids = [1,2,3,4];
  productDetails = [{pid:1, price : 200},{pid:2, price : 60},{pid:3, price : 390},{pid:4, price : 50},];
  fetchData = (id:any) => { return of(this.productDetails.find(x => x.pid == id)).pipe( delay(500) )}
  //
  // concatMap
  concatMap_(){
    of('a','b','c').pipe(
      concatMap( x => interval(100)
        .pipe( 
          map(i => x + i ),  
          take(3) 
        ))
    ).subscribe( x => console.log(x));
    // output // a0,a1,a2,b0,b1,b2,c0,c1,c2
    //
    from([1,2,3,4]).pipe( concatMap( pid => this.fetchData(pid)) ).subscribe( console.log);
    // output // fetchData objects
    //
    setTimeout(() => {
    from([1,2,3,4]).pipe( 
      concatMap( pid => this.fetchData(pid)),
      // اضيف اللى انا عايزه هنا .. لما يجرع من ال concatMap
      map( product => ({...this.productDetails, priceWithTax : product?.price })) 
      ).subscribe( console.log);
    }, 500);
  }
// mergeMap
mergeMap_(){
  of('a','b','c').pipe(
    mergeMap( x => interval(100)
      .pipe(
        map(i => x + i ),
        take(3)
      ))
  ).subscribe( x => console.log(x));
  // a0,a1,a2,b0,b1,b2,c0,c1,c2
}
//switchMap
switchMap_(){
  from([1,2,3,4]).pipe(
    switchMap(pid => this.fetchData(pid)),
    map( product => ( { ...this.productDetails, totalPrice : product?.price } ) )
  ).subscribe( x => console.log(x));
}
// exhaustMap
exhaustMap_(){
  from([1,2,3,4]).pipe(
    exhaustMap(pid => this.fetchData(pid)),
    map( product => ( { ...this.productDetails, totalPrice : product?.price } ) )
  ).subscribe( x => console.log(x));
}
// ------------------------------ Transform Source observable Operator --------------------------------------
  // defaulIfEmpty
  defaulIfEmpty_(){
    const clicks = new Observable( obs => obs.complete() );
    clicks.pipe( defaultIfEmpty('there is no clicks') ).subscribe(console.log);
  }
  // startWith
  startWith_(){
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr'];
    const weekEnds = ['Fri', 'Sat'];
    of(...weekEnds).pipe( startWith(...weekDays) ).subscribe(console.log);
  }
  // reduce
  clicks = new Observable(obs =>{
    obs.next('click 1');
    obs.next('click 2');
    obs.next('click 3');
    obs.next('click 4');
    obs.next('click 5');
    obs.complete();
  });
  reduce_(){
    
    this.clicks.pipe( map(() => 1), reduce( (acc , one) => acc + one , 0 ) ).subscribe(console.log);
    //
    of(1,2,3).pipe(
      reduce( (total , n) => total + n , 0),
      tap(console.log),
      map( (sum, index) => {
        console.log(sum (index + 1));
        return sum / (index + 1);
      })
    )
  }
  // scan
  scan_(){
    this.clicks.pipe(
      map( () => 1),
      scan( (acc , curr) => acc + curr, 0),
      tap(console.log),
    ).subscribe(console.log);
    //
    of(1,2,3).pipe(
      scan( (acc , curr) => acc + curr),
      map( (sum , index) => sum / index + 1)
    ).subscribe(console.log)
  }
  // materialize
  materialize_(){
    of('a', 'b', 13 , 'c').pipe(
      map( x => x.toString().toUpperCase()),
      materialize()
    ).subscribe(console.log)
  }
  // dematerialize
  dematerialize_(){
    // const notifies = [{kind:'A', q:1},{kind:'A', q:2},
    // {kind:'B', q:3, error : new TypeError('this is error from 3rd obj')}]
    // of(notifies)
    // .pipe( dematerialize() ).subscribe({
    //   next : x => console.log(x),
    //   error : x => console.log('err' + x)
  // });
  }
}
