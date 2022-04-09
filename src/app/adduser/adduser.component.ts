import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUsersService } from '../add-users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  msg:string;

  constructor(public AddUser : AddUsersService, public myrout : Router) { }

  ngOnInit(): void {
  }

  doAddUser(form:NgForm)
  {
    console.log("USER ADDED");
    console.log(form.value);

    this.AddUser.DouserAdd(form.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;
    },(error:any)=>{
      console.log(error);
      this.msg="Something Went Wrong";
    })
    form.reset();
    this.myrout.navigateByUrl("/add");
  }

}
