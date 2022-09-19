import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, ViewChildren, QueryList, ContentChild, ContentChildren, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  encapsulation : ViewEncapsulation.None // خليت مفيش ENCAPSULATION وبالتالى الحاجة GLOBAL
})
export class ParentComponent implements OnInit {

  outputFromParent : string ="";
  inputToParent : string ="";
  //
  theTitle : string = "";
  myTitle : string ="Ali";
  //
  lifeCycleTitle:string="Title from Parent";
  //
  // @ViewChild(ChildComponent) myChild? : ChildComponent;
  // @ViewChild(ChildComponent, {static:false, read:ElementRef}) myChild? : ChildComponent; // برجع نوع مختلف وهو مثلا ELEMENTREF
  @ViewChild('compRef') myChild? : ChildComponent; //or
  // يتفعل afterViewInit
  // يقدر يشوف الحاجة اللى عنده فى ال view بس
  //
  @ViewChildren(ChildComponent) childs : QueryList<ChildComponent> | undefined // بتاخد read بس
  //
  @ContentChild( ChildComponent) contentCh? : ChildComponent;
  // @ContentChildren( ChildComponent) contentChs? : QueryList<ChildComponent>; // or
  @ContentChildren( 'ref') contentChs? : QueryList<ElementRef>;

  // constructor() {
  //   console.log('in ctor', this.myChild);
  // }

  ngOnInit(): void {
    console.log('on init', this.myChild);
    console.log('on init content child', this.contentCh);
  }
  
  ngAfterViewInit(){
    console.log('After View Init', this.myChild);
    console.log('After View Init' , this.childs?.toArray());
  }

  ngAfterContentInit() {
    console.log('on after content init content child', this.contentCh);
    console.log('on after content init content children', this.contentChs);
  }
// -----------------------------------------------------
names:string[] = [] ;
// names : BehaviorSubject<string[] | string> = new BehaviorSubject(['a','b','c']);


addNames( name : string){
  this.names?.push(name); // Nutation // update
  // this.names = [...this.names, name]; // new Reference
  // نعمل ref جديد عشان يشتغل .. بعد ما عملت call ل ChangeDetection .. فى ال Decorator
   //
  //  this.names.next(name);
}

}
