import { AnimeLogoutComponent } from './core/animations/anime-logout/anime-logout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { SvgComponent } from './components/svg/svg.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HomeComponent } from './core/shared-components/home/home.component';
import { NotFoundComponent } from './core/shared-components/not-found/not-found.component';
import { SignupComponent } from './core/auth-components/signup/signup.component';
import { LoginComponent } from './core/auth-components/login/login.component';
import { AllAuthComponent } from './core/auth-components/all-auth/all-auth.component';
import { SomeMaterialComponent } from './ecommerce/some-material/some-material.component';

import { ProdSidebarComponent } from './ecommerce/prod-sidebar/prod-sidebar.component';
import { SidebarComponent } from './ecommerce/sidebar/sidebar.component';

import { CanLoadGuard } from './core/guards/can.load.guard';
import { RoleGuard } from './core/guards/role.guard';
import { HttpClientComponent } from './components/http.client/http.client.component';
import { TranslateComponent } from './components/translate/translate.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { AnimationComponent } from './components/animation/animation.component';
import { AnimeLoginComponent } from './core/animations/anime-login/anime-login.component';
import { AnimePopupComponent } from './core/animations/anime-popup/anime-popup.component';
import { AnimeBasicsComponent } from './core/animations/anime-basics/anime-basics.component';
import { RxjsTeddyComponent } from './components/rxjs-teddy/rxjs-teddy.component';
import { RxjsBasilComponent } from './components/rxjs-basil/rxjs-basil.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  // {path:'home', component : HomeComponent},
  {path:'svg', component : SvgComponent},
  {path:'parent', component : ParentComponent},
  {path:'child', component : ChildComponent},
  {path:'child:/id', component : ChildComponent, pathMatch:'full'},
  {redirectTo : 'redirect', path:'patent'},
  // {path :'login' , redirectTo :'/', pathMatch:'full'}, // to home
  {path:'auth' , component : AllAuthComponent, children:[
    {path : '', redirectTo : 'signup', pathMatch : 'full'},
    {path : 'signup', component : SignupComponent},
    {path : 'login', component : LoginComponent},
  ] },
  {path : 'http', component : HttpClientComponent},
  {path : 'translate', component : TranslateComponent},
  {path : 'animation', component : AnimationComponent, children : [
    {path : '', redirectTo : 'anime_basics', pathMatch : 'full'},
    {path : 'anime_basics', component : AnimeBasicsComponent},
    {path : 'anime_login', component : AnimeLoginComponent},
    {path : 'anime_logout', component : AnimeLogoutComponent},
    {path : 'anime_popup', component : AnimePopupComponent},
  ]},
  {path : 'rxjs', component : RxjsComponent, children : [
    {path : '', redirectTo : 'rxjs' , pathMatch : 'full'},
    {path : 'rxjsteddy', component : RxjsTeddyComponent},
    {path : 'rxjsbasil', component : RxjsBasilComponent},
  ]},


  // // material ecommerce
  {path:'material', component : SomeMaterialComponent, children : [
    //
    {path: 'details', loadChildren:()=>
      import('./modules/details/details.module').then(m => m.DetailsModule),
      // canLoad : [CanLoadGuard],
      canActivate : [RoleGuard],
      data : {role : 'admin'},
    },
    {path : '' , component : SidebarComponent, outlet:'sidebar'},
    {path : 'product_sid_menu' , component : ProdSidebarComponent, outlet:'sidebar'},
    //
  ]},

  {path:'**', component : NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy : PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
