import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AnimeLoginComponent } from './animations/anime-login/anime-login.component';
import { AnimeLogoutComponent } from './animations/anime-logout/anime-logout.component';
import { AnimePopupComponent } from './animations/anime-popup/anime-popup.component';
import { AnimeBasicsComponent } from './animations/anime-basics/anime-basics.component'


@NgModule({
  declarations: [
    AnimeLoginComponent,
    AnimeLogoutComponent,
    AnimePopupComponent,
    AnimeBasicsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
