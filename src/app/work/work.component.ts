import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AddUsersService } from '../add-users.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  userdata:{_id:number,ebranch:string,edesignation:string,efirstname:string,elastname:string,
    esalary:string,eleave:string,eid:string}
  a:{e:number,b:number}  

  constructor(public activeRoute :  ActivatedRoute,public userSer:AddUsersService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((param:Params)=>{
      let a=param.userid
      console.log("user id : ",a);
      if(param.userid){
        this.userSer.getUsersData(a).subscribe((data:any[])=>{
          console.log(data);
          this.userdata=data[0];
          let a=Number(this.userdata.esalary)
          let b=24
          let c=a/b
          console.log(c," is one day salary")
          let d=Number(this.userdata.eleave)
          let e=c*d
          console.log(e," is earning till today")
          let f=String(e)
          let e1=parseFloat(f).toFixed(2)
          let f1=String("₹ "+e1)
          document.getElementById("sal").innerHTML = f1;
          let g=(d/b)*100
          let h=String(g)
          let g1=parseFloat(h).toFixed(2)
          let h1=String(g1+" %")
          document.getElementById("per").innerHTML = h1;
        },(error:any)=>{
          console.log(error);
        })
      }
    })
  }

}
