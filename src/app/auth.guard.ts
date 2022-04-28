import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AddUsersService } from './add-users.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public UserSer:AddUsersService,public myRouter:Router){

  }
  canActivate():boolean{
    if(!this.UserSer.isLoggedIn()){
      this.myRouter.navigateByUrl("/login");
    }
    return this.UserSer.isLoggedIn();
  }
  
}
