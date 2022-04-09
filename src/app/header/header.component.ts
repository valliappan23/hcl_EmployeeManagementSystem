import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUsersService } from '../add-users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public UserSer:AddUsersService, public myRouter:Router) { }

  // isemployee = !!this.UserSer.isEmployee();
  ngOnInit(): void {
  }
  doLogout(){
    localStorage.clear();
    this.myRouter.navigateByUrl("/login");

  }
  move(){
    let a=localStorage.getItem("loggeduser");
    console.log(a);
    this.myRouter.navigateByUrl(`/dashboard/${a}`);
  }


}
