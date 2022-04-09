import { Component, OnInit } from '@angular/core';
import { AddUsersService } from '../add-users.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  msg: string;
  users: any[]=[];

  constructor(public userSer:AddUsersService) { }

  ngOnInit(): void {
    this.userSer.getAllUsers().subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error:any)=>{
      this.msg="Something went wrong";
    });
  }
  deleteUser(userId:number){
    if(confirm("Are You Sure To Delete The User")){
      // console.log("User Deleted with Id "+userId);
      this.userSer.deleteUserData(userId).subscribe((data:string)=>{
        this.msg=data;
        var index=this.users.findIndex((obj)=>{
          return obj._id==userId;
        });
        this.users.splice(index,1);
      },(error:any)=>{
        this.msg="Something went wrong";
      })
    }
  }
  doSearch(search:string){
    this.userSer.searchUsers(search).subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error:any)=>{
      console.log(error)
    })
  }

}
