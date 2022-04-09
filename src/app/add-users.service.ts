import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUsersService {

  constructor(public http:HttpClient) { }

DouserAdd(data:any){
  return this.http.post<string>("http://localhost:3000/add",data);
}
DouserLogin(data:any){
  return this.http.post<any[]>("http://localhost:3000/login",data);
}
isLoggedIn(){
  console.log("true");
  return !!localStorage.getItem("loggeduser");
}
isEmployee(){
  let typeUsr = localStorage.loggeduserDesignation;
  
  let smTyp = typeUsr.toLowerCase();
  console.log(smTyp);
  // console.log("lowercase " + smTyp);

  if(smTyp === "employee"){
    // console.log("falsee varuthuu");
    return false;
  }
  else{
    
    // console.log("true varuthuuu");
    return true;
  }
}


getAllUsers(){
  return this.http.get<any[]>("http://localhost:3000/allusers");
}
getSingleUsersData(userID:string){
  return this.http.get<any[]>("http://localhost:3000/singleusers/"+userID);
}
editSingleUsersData(data:any){
  return this.http.put<string>("http://localhost:3000/EDITsingleusers",data);
}
deleteUserData(UserId:number){
  return this.http.delete<string>("http://localhost:3000/deleteusers/"+UserId);
}
searchUsers(searchtxt:string){
  return this.http.get<any[]>("http://localhost:3000/searchUser/"+searchtxt);
}


}
