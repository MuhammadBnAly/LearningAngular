import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic-tobics',
  templateUrl: './basic-tobics.component.html',
  styleUrls: ['./basic-tobics.component.scss']
})
export class BasicTobicsComponent implements OnInit {


  title = 'App';
  imgUrl : string = "https://via.placeholder.com/150";
  username :string = "Ali";
  myColor : string[] = ["red", "blue", "yellow"];
  isActive : boolean = false;

  colors : Array<string> = ["red", "blue", "yellow"];
  selectedColor : string = "";
  //
  students : Array<Student> ;
  //
  item={id:1}; //  /? = null|undefiend

  @ViewChild('phoneNumber')
  myPhone!: ElementRef<HTMLInputElement>;


  constructor() {
    this.students = [
      {id:1,name:"Ali",age:35},
      {id:2,name:"Rami",age:73},
      {id:3,name:"Ola",age:10},
      {id:4,name:"Hani",age:22},
    ];
    //
    setTimeout(() =>{
      console.log(this.myPhone.nativeElement.value);
    }, 2000);
  }

  refreshData(){
    this.students =[
      {id:1,name:"Ali",age:35},
      {id:2,name:"Rami",age:73},
      {id:3,name:"Ola",age:10},
      {id:4,name:"Hani",age:22},

      { id:5, name: "Kamal", age:33}
    ]
  }

  track( index:number, student : Student ){
    return student.id;
  }

  call( phone : string ){
    console.log( phone );
  }

  log(event : Event){
    console.log(event);
  }
  anotherLog(event : Event){
    console.log(`the event is : ${event}`);
  }


  ngOnInit(): void {
  }

}

interface Student{
  id : number,
  name : string,
  age : number
}
