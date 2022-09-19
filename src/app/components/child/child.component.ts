import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy {


  @Input() inputToChild!: string;
  @Output() outputFromChild : EventEmitter<string> = new EventEmitter<string>();
  //
  @Input() theTitle : string = "";
  @Output() theTitleChange : EventEmitter<string> = new EventEmitter();

  //
  @Input() set setRefactor_Title(name : string){
    console.log(name);
    this.setRefactor_Title_after = name;
  };
  setRefactor_Title_after? : string;
  //


  //-------------------------------------------------------------
  // 1- do not make any logic here.
  // constructor() { }
  // 2-watching input changes
  ngOnChanges(changes : SimpleChanges) {
    // console.log('change is ', changes);
  }
  //3-when component done
  // ngOnInit(): void {
  //   // اول ما ال component ما تتعمل .. روح هاتلى ال data من ال server
  //   // console.log('On Init');
  // }
  // 4-change detection
  ngDoCheck(): void {
      // لو فيع تغيير يلحق يعمله render
      // console.log('Do Detect');
  }
  // 5-Content projection
  ngAfterContentInit(): void {
    // تسلسل زمنى .. بيشتغل مره واحده بس
      // console.log('After Content Init');
  }
  // 6-Change Detection + Content Projection
  ngAfterContentChecked() {
    // بعد كل detect .. هتشتغل بعد AfterContentInit
    // console.log('After Content Checked');
  }
  // 7-Invoked when the component's view has been fully initialized
  ngAfterViewInit(){
    // لما ال VIEW يتعمله initialize على اخر حاجة
    // لما ال view يكمل .. روح اعمل الحاجة الفلانية
    // console.log('AfterViewInit');
  }
    // 8-Change Detection + fully initialized for component's view
    ngAfterViewChecked(): void {
        // console.log('AfterViewChecked');
    }
    // 9- before destroy the component
    ngOnDestroy(): void {
      //لما ال component تنتهى
      // قبل ما ال component ما تنتهى .. اعملى unsubscribe لكل ال observables
        // console.log('OnDestroy');

    }


  //// -------------------------------------------------------------------------
  // methods
  setTitle( title: string){
    console.log(`I am from child, it is a ${title}`);
  }

  emitDate(){
    this.outputFromChild.emit("this is from Emitter on child");
  }

  emitIt(event : Event){
    return this.theTitleChange.emit((event.target as HTMLInputElement).value);
  }
  toUpper($theString : any){
    let y = $theString;
    let opting = String(y).toUpperCase();
    console.log( opting );
  }
// =====================================================
@Input() names? : string[];
// @Input() names? : BehaviorSubject<string[] | string>;
// list : string[] = [];
constructor(private cdRef : ChangeDetectorRef) {
  this.cdRef.detach();// ميعملش check على ال view لل comp
  setTimeout(() => {
    this.cdRef.detectChanges(); // هيرجعلى ال data تانى
    this.cdRef.reattach(); // نركب ال view تانى بعد ما فصلناه عن ال comp
    this.cdRef.checkNoChanges(); // development only
  }, 1000);
}
ngOnInit() {
  // this.names?.subscribe((name : string) => {
  //   this.list = [...this.list, ...this.name];
  // // this.cdRef.markForCheck(); // بتعمل check على مسار معين فى ال tree
  // })
}
refresh(){
setTimeout(() => {
  this.cdRef.detectChanges();
}, 2000);}




}


