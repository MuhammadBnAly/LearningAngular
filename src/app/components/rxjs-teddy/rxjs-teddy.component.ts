import { Component, OnInit } from '@angular/core';
import { from, Observable, of, map, filter } from 'rxjs';

@Component({
  selector: 'app-rxjs-teddy',
  templateUrl: './rxjs-teddy.component.html',
  styleUrls: ['./rxjs-teddy.component.scss']
})
export class RxjsTeddyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.next_complete_error();
    this.of_();
    this.handMadeOf();
    this.from_();
    this.map_();
    this.pipe_();
    this.filter_();
  }
  // next , complete , error
next_complete_error(){
    // subscriber
    let observable$ = new Observable( (subscriber) => {
      subscriber.next('subscriber');
      subscriber.complete();
      subscriber.error();
    } );
    // user
    let observer = {
      next : (value : any) => {
        console.log( 'user is ' + value);
      },
      complete : () => {
        console.log('completed');
      },
      error : (err : any) => {
        console.log('error');
      }
    }
    // connection
    observable$.subscribe(observer);
}

// of
of_(){
  of('Mohamed', 'Ali', 'is', 5).subscribe( value => {
    next : console.log(value);
    complete : () => console.log('completed');
    error : (err: any) => console.log(err);
  } );
}
  //
   handMadeOf(...args:any) {
    return new Observable( subscriber => {
      for (let i = 0; i < args.length; i++) {
        subscriber.next(args[i])
      }
      subscriber.complete();
    } )
  }

  // from
  from_(){
    from(['Mohamed','Ali','is',25]).subscribe({
      next : (value) => console.log(value),
      complete : () => console.log('completed')
    })
    //
    const promise = new Promise( (resolve, reject) =>{
      resolve('resolve')
    } )
    console.log(promise);
    //
    const resolvePromise$ = from(promise);
    resolvePromise$.subscribe({
      next : (value) => console.log(value)
    })
  }

  numArr = [1,2,3,4];
  // map
   map_(){
    const mapNums$ = from(this.numArr).pipe( (map( (value) => value * 2 )) );
    const returnedValue = (mapNums$.subscribe( (x) => console.log(x)))
   }

   // pipe
   pipe_(){
    const thePipe$ = from([this.numArr])
    .pipe(
       map( (val : any) => val * 2)
    )
    .subscribe(value => console.log(value))
   }
   
   // filter
  filter_(){
    const filterVal$ = 
    from(this.numArr)
    .pipe(
      filter( (num) => num ===2 )
    )
    .subscribe( value => console.log(value)
    )
  }
}