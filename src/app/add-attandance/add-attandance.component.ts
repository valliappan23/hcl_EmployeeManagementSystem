import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AddUsersService } from '../add-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-attandance',
  templateUrl: './add-attandance.component.html',
  styleUrls: ['./add-attandance.component.css']
})
export class AddAttandanceComponent implements OnInit {

  constructor(public userser:AddUsersService) { }

  ngOnInit(): void {
  }
  doAddInAttendance(form:NgForm){
    console.log("User added successfully");
    console.log(form.value);
    this.userser.DoAddInAttendance(form.value).subscribe((data:string)=>{

      console.log(data);
      

    },(error:any)=>{
      console.log(error);
    });
    form.reset();
    
  }

}
