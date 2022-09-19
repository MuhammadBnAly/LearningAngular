import { Component, OnInit } from '@angular/core';
import { routingAnimation } from '../../core/animations/routing.animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations : [routingAnimation],
})
export class AnimationComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

}
