import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.scss']
})
export class Forms1Component implements OnInit {

  // reactiveForms = new FormControl;
  // templateDrivenForms = '';
  //
  theFormGroup : FormGroup;

  constructor( private fb : FormBuilder) {
    // this.reactiveForms.valueChanges.subscribe( (data) => {
    //   console.log(data);
    //   // change in view will reflect to ts
    //   setTimeout(() => {
    //     this.reactiveForms.setValue('Hello World');
    //   }, 2000);
    //   // change in ts will reflect to view
    // })
    //
      // form builder
      this.theFormGroup = this.fb.group({
        fName : ['', [ Validators.required, Validators.minLength(4 ) ]],
        lName : ['', Validators.min(5)],
        email : ['', [Validators.email, Validators.pattern('.*com$')]],
        address : this.fb.group({
          country : '',
          city : ''
        })
      });
      // numbers only
      this.theFormGroup.valueChanges.subscribe( data =>{
        console.log('first name is :', this.fName);
        console.log('email is :', this.email);
        if(isNaN(data.lName)){
          this.theFormGroup.patchValue({
            lName : data.lName.replace(/[a-zA-Z]/g, '')
          });
        }
      });
  }
  get fName(){
    return this.theFormGroup.get('fName');
  }
  get email(){
    return this.theFormGroup.get('email');
  }

  //
  // theFormGroup = new FormGroup({
  //   fName : new FormControl(),
  //   lName : new FormControl(),
  //   address : new FormGroup({
  //     country : new FormControl(),
  //     city : new FormControl()
  //   })
  // });
  onSubmit(){
    console.log(this.theFormGroup.value);
    this.email?.disable();
    setTimeout(() => {
      this.email?.enable();
    }, 2000);
  }
  // onUpdate(){
  //   this.theFormGroup.patchValue({
  //     fName : 'Rami',
  //     address:{
  //       city : 'Cairo'
  //     }
  //   });
  // }
//
//



  ngOnInit(): void {
  }

}
