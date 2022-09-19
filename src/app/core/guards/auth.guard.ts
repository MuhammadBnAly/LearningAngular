import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn :'root'
})
export class AuthGuard implements CanActivate{
  canActivate(
    next : ActivatedRouteSnapshot,
    state : RouterStateSnapshot
  ){
    console.log('In Auth Guard', next, state);
    // if(+next.params.id === 2){
      if( ! localStorage.getItem('isAuth')){
      return false
    }
    return true
  }
}
