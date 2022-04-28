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
  let typeUsrId = localStorage.loggeduser;
  console.log(typeUsrId)
  
  let smTyp = typeUsr.toLowerCase();
  console.log(smTyp);
  // console.log("lowercase " + smTyp);

  if(smTyp === "employee"){
    // console.log("falsee varuthuu");
    return false;
  }
  else{
    //console.log("true varuthuuu");
    if(smTyp==="manager"){
      let a="employee";
      console.log("FIND FOR EMPLOYEE");
      return this.getManager();
    }
    return true;
  }
}
getManager(){
  return this.http.get<any[]>("http://localhost:3000/manager");
}
isMng(){
  let typeUsr = localStorage.loggeduserDesignation;
  let smTyp = typeUsr.toLowerCase();
  console.log(smTyp);
  if(smTyp === "manager"){
    // console.log("falsee varuthuu");
    return false;
  }
  else{
    return true;
  }
  
}


isAdmin(){
  let typeUsr = localStorage.loggeduserDesignation;
  let smTyp = typeUsr.toLowerCase();
  console.log(smTyp);
  if(smTyp === "admin"){
    // console.log("falsee varuthuu");
    return false;
  }
  else{
    return true;
  }
  
}


getAllUsers(userType:string){
  return this.http.get<any[]>("http://localhost:3000/allusers/"+userType);
}
getSingleUsersData(userID:string){
  console.log(userID," data need to fetch");
  
  return this.http.get<any[]>("http://localhost:3000/singleusers/"+userID);
}


getUsersData(userID:string){
  console.log(userID," data need to fetch");
  
  return this.http.get<any[]>("http://localhost:3000/single/"+userID);
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
DoAddInAttendance(data:any){
  return this.http.post<string>("http://localhost:3000/addINattendance",data);
}
getAllUsersInAttandance(){
  return this.http.get<any[]>("http://localhost:3000/allusersInAttandance");
}

searchUsers1(searchtxt:string){
  return this.http.get<any[]>("http://localhost:3000/searchUser1/"+searchtxt);
}
addAttendance(ID:string,data:string){
  console.log()
  const myData = {
    ID,
    data
  }
  return this.http.put<any>("http://localhost:3000/addAttendance/",myData);
}
resetAttendance(ID:string,data:string){
  console.log()
  const myData = {
    ID,
    data
  }
  return this.http.put<any>("http://localhost:3000/resetAttendance/",myData);
}




}
