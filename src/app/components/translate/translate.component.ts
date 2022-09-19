import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  /// save the last LANGUAGE
  currentLanguage : any;
  constructor(public translate : TranslateService) {
    this.currentLanguage = localStorage.getItem('currentLanguage' || 'en')!;
    this.translate.use(this.currentLanguage);
   }
   changeLanguage( lang : string){
    this.translate.use(lang);
    localStorage.setItem('currentLanguage', lang);
  }

  /// content
  loginBy? : { en : string, ar : string};
  
  ngOnInit(): void {
    this.loginBy = {
      en : 'Login with Facebook',
      ar : 'تسجيل الدخول بواسطه الفيسبوك'
    };
    this.translate.onLangChange.subscribe( (data) => {
      console.log(data);
    })
  }


}
