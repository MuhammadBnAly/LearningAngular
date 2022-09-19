import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from 'src/app/core/services/log.service';
import { LoggingService } from '../../core/services/logging.service';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent implements OnInit {

  fillColor = 'rgb(255,255,255)';
  constructor(
    private logService : LogService,
    private loggingService : LoggingService,
    private title : Title,
    private meta : Meta,
    public activeRoute : ActivatedRoute,
    private router : Router) {
      console.log(this.title.getTitle());
      console.log(this.title.setTitle('Hello World'));
      this.meta.addTag({name : 'twitter:card', content:'hello from twitter meta'})
      //
      console.log('activated Route', this.activeRoute);

     }

  ngOnInit(): void {
  }

  changeColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r},${g},${b})`;
  }
  allLogs(){
    console.log("log from SVG");
    console.log(this.logService.myLog());
    console.log(this.loggingService.logging());
  }
  //
  goHome(){
    // this.router.navigateByUrl(''); // or
    this.router.navigate(['']);
  }

}
