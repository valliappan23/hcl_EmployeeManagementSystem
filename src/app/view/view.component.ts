import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AddUsersService } from '../add-users.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  
  userdata:{_id:number,ubranch:string,udesignation:string,udob:string,udoj:string,ufirstname:string,uid:string,
    ulastname:string,uleave:number,umail:string,upass:string,uphone:string,usalary:string,utleave:number};

  constructor(public activeRoute:ActivatedRoute,public userSer:AddUsersService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params)=>{
      console.log(param.USERID);
      if(param.USERID){
        this.userSer.getSingleUsersData(param.USERID).subscribe((data:any[])=>{
          console.log(data);
          this.userdata=data[0];
          console.log(data[0].uleave);
        },(error:any)=>{
          console.log(error);
        })
      }
    })
  }

}
