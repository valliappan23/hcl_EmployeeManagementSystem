import { Component, OnInit } from '@angular/core';
import { AddUsersService } from '../add-users.service';

@Component({
  selector: 'app-mark-attandance',
  templateUrl: './mark-attandance.component.html',
  styleUrls: ['./mark-attandance.component.css']
})
export class MarkAttandanceComponent implements OnInit {
  msg:string;
  users: any[]=[];
  userdata:{id:string}

  constructor(public UserSer:AddUsersService) { }

  ngOnInit(): void {
    this.UserSer.getAllUsersInAttandance().subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error:any)=>{
      this.msg="something went wrong";
    })
  }
  addattendance(present:string,ID:string){
    let a=Number(present);
    console.log(ID)
    a=a+1;
    console.log(a +" new count");
    let b=a.toString()
    // document.getElementById('tp').innerHTML=present;
    this.UserSer.addAttendance(ID,b).subscribe((data:string)=>{
      console.log(data);
      window.location.reload();
      // this.msg=data;
    },(error:any)=>{
      console.log(error)
    })

  }
  resetattendance(present:string,ID:string){
    
    let a=Number(present);
    console.log(a);
    let b=a;
    a=0;
    console.log(a)
    let c=a.toString()
    this.UserSer.resetAttendance(ID,c).subscribe((data:string)=>{
      console.log(data);
      window.location.reload();
      // this.msg=data;
    },(error:any)=>{
      console.log(error)
    })


  }
  doSearch(search:string){
    this.UserSer.searchUsers1(search).subscribe((data:any[])=>{
      console.log(data);
      this.users=data;
    },(error:any)=>{
      console.log(error)
    })
  }

}
