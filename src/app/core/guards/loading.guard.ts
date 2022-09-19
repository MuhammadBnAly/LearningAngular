import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { DetailsComponent } from '../../ecommerce/details/details.component';
import { Observable } from 'rxjs';

export interface CanDeactivateComponent{
  canDeactivate() : () => Observable<boolean> | Promise<boolean> | boolean ;
}

@Injectable({
  providedIn : 'root'
})
export class LoadingGuard implements CanDeactivate<DetailsComponent>{
  canDeactivate(component: DetailsComponent , currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error("Method not implemented.");
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  // اخليه يفضل فى ال comp ميتطلعش
  
  // canDeactivate(component : DetailsComponent){
  //   console.log(component);
  //   // return component.canDeactivate;
  //   if(window.confirm('Still Loading, Are you sure you want to leave?')){
  //     return component.canDeactivate ? component.canDeactivate() : true;
  //   }
  // }
}
