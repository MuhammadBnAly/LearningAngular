// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateModule } from './modules/create.module';
import { DetailsModule } from './modules/details/details.module';
import { Router, RouterModule, Routes } from '@angular/router';
// animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { BasicTobicsComponent } from './components/basic-tobics/basic-tobics.component';
import { SvgComponent } from './components/svg/svg.component';
import { Forms1Component } from './forms1/forms1.component';
import { HomeComponent } from './core/shared-components/home/home.component';
import { NotFoundComponent } from './core/shared-components/not-found/not-found.component';
import { HeaderComponent } from './core/shared-components/header/header.component';
import { FooterComponent } from './core/shared-components/footer/footer.component';
import { LoginComponent } from './core/auth-components/login/login.component';
import { SignupComponent } from './core/auth-components/signup/signup.component';
import { AllAuthComponent } from './core/auth-components/all-auth/all-auth.component';
import { SomeMaterialComponent } from './ecommerce/some-material/some-material.component';
import { SidebarComponent } from './ecommerce/sidebar/sidebar.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientComponent } from './components/http.client/http.client.component';
import { httpInterceptorProviders } from './core/interceptors/providers';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader } from '@ngx-translate/core/public_api';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateComponent } from './components/translate/translate.component';
import { HttpClient } from '@angular/common/http';
import { AnimationComponent } from './components/animation/animation.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { RxjsTeddyComponent } from './components/rxjs-teddy/rxjs-teddy.component';
//

const appRoutes : Routes = [
  { path : 'parent', component : ParentComponent},
  { path : 'child', component : ChildComponent},
  { path : 'svg', component : SvgComponent},
]

@NgModule({
  declarations: [
    // components
    AppComponent,
    ParentComponent,
    ChildComponent,
    BasicTobicsComponent,
    SvgComponent,
    Forms1Component,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    AllAuthComponent,
    SomeMaterialComponent,
    SidebarComponent,
    HttpClientComponent,
    TranslateComponent,
    AnimationComponent,
    RxjsComponent,
    RxjsTeddyComponent,
    //
  ],
  imports: [
    // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    SharedModule,
    DetailsModule,
    CoreModule,
    // // translate
    // TranslateModule.forRoot({
    //   defaultLanguage : 'en',
    //   loader : {
    //     provide : TranslateLoader,
    //     useFactory : CreateTranslateLoader,
    //     deps : [HttpClient]
    //   }
    // }),

    //
    // CreateModule.forRoot() // custom module
  ],
  providers: [
    // services
    // interceptors // 
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Debugging
  constructor(private router : Router) {
    const replacer = (key: any, value: { name: any; }) => typeof value === 'function' ? value.name : value;
    console.log('routes' , JSON.stringify(router.config , replacer , 2));
  }
}

// translate loader
export function CreateTranslateLoader(http : HttpClient){
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
