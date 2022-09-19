import { Injectable } from "@angular/core";
import { CanActivateChild } from "@angular/router";


@Injectable({
  providedIn :'root'
})
export class ChildrenGuard implements CanActivateChild{
  // انك متدخلش على اى child من ال comp الحالية
  canActivateChild(){
    return false
  }
}
