import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private activateRoute : ActivatedRoute,
    private router : Router) {
      // setTimeout(() => {
      //   this.router.navigate(['../'], {relativeTo : this.activateRoute})
      // }, 1000);
     }

  ngOnInit(): void {
  }

}
