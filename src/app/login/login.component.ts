import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUsersService } from '../add-users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string;
  constructor(public AddUser :AddUsersService,public myRouter:Router) { }

  ngOnInit(): void {
  }
  doLogin(form:NgForm){
    console.log(form.value);
    this.AddUser.DouserLogin(form.value).subscribe((data:any[])=>{
      console.log(data);
      //this.msg=data;
      if(data.length==0){
        this.msg="Invalid Login";
      }
      else{
        localStorage.setItem("loggeduser",data[0]._id);
        let a=localStorage.getItem("loggeduser");
        console.log(a);
        localStorage.setItem("loggeduserDesignation",data[0].udesignation);
        let b=localStorage.getItem("loggeduserDesignation");
        console.log(b);
        localStorage.setItem("loggeduser MAIN ID",data[0].uid);
        let c=localStorage.getItem("loggeduser MAIN ID");
        console.log(c);
        this.myRouter.navigateByUrl(`/dashboard/${a}`);
      }
    },(error: any)=>{
      console.log(error);
      this.msg="something went wrong";
    })
  }

}
