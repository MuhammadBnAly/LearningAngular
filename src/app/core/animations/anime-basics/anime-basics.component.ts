import { toggleFade } from '../../../core/animations/fade-out-animations';
import { popup } from '../../../core/animations/popup.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-basics',
  templateUrl: './anime-basics.component.html',
  styleUrls: ['./anime-basics.component.scss'],
  animations : [toggleFade, popup,] // add it
})
export class AnimeBasicsComponent implements OnInit {

  isLogin? : boolean;
  openPopup? : boolean;

  constructor() {
    this.isLogin = true;
    this.openPopup = false;
   }
  ngOnInit(): void {
  }

}
