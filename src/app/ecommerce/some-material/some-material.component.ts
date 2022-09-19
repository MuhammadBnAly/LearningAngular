import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-material',
  templateUrl: './some-material.component.html',
  styleUrls: ['./some-material.component.scss']
})
export class SomeMaterialComponent implements OnInit {
  isProductSidebarOpen ?:boolean;

  constructor() {
    this.isProductSidebarOpen = false;
   }

  ngOnInit(): void {
  }
  loginCheck(){
    localStorage.clear();
    let x = localStorage.getItem('isAuth')?.valueOf();
    if(x == 'true'){
      localStorage.setItem('isAuth', 'false');
      console.log('you are Authorized');
    }
    else{
      localStorage.setItem('isAuth', 'true');
      console.log('you are NOT Authorized');
    }

  }

}
