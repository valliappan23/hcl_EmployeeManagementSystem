import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AddUsersService } from '../add-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  msg:string;

  userdata:{_id:number,ubranch:string,udesignation:string,udob:string,udoj:string,ufirstname:string,uid:string,
    ulastname:string,uleave:string,umail:string,upass:string,uphone:string,usalary:string,utleave:string};

  constructor(public activeRoute: ActivatedRoute, public userser:AddUsersService, public myrout : Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params)=>{
      console.log(param.USERID);
      if(param.USERID){
        this.userser.getSingleUsersData(param.USERID).subscribe((data:any[])=>{
          console.log(data)
          this.userdata=data[0];
        },(error:any)=>{
          console.log(error)
        })

      }
    })
  }
  doEditUser(form:NgForm)
  {
    console.log("USER EDITED");
    form.value._id=this.userdata._id;
    console.log(form.value);
    this.userser.editSingleUsersData(form.value).subscribe((data:string)=>{
      this.msg=data;
      this.myrout.navigateByUrl("/management")
    },(error:any)=>{
      this.msg="Something Went Wrong."
    })
    
  }

  

}
