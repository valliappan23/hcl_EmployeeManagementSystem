import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeBodyComponent} from './home-body/home-body.component'
import {AboutComponent} from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ManagementComponent } from './management/management.component';
import { ViewComponent } from './view/view.component';
import { AddAttandanceComponent } from './add-attandance/add-attandance.component';
import { MarkAttandanceComponent } from './mark-attandance/mark-attandance.component'
import {WorkComponent } from './work/work.component'


const routes: Routes = [
  {path: "",component:HomeBodyComponent},
  {path: "about",component:AboutComponent},
  {path: "login",component:LoginComponent},
  {path: "dashboard/:USERID",component:DashboardComponent,canActivate:[AuthGuard]},
  {path: "edit/:USERID",component:EdituserComponent,canActivate:[AuthGuard]},
  {path: "add",component:AdduserComponent,canActivate:[AuthGuard]},
  {path: "management",component:ManagementComponent,canActivate:[AuthGuard]},
  {path: "view/:USERID",component:ViewComponent,canActivate:[AuthGuard]},
  {path: "addAttendance",component:AddAttandanceComponent,canActivate:[AuthGuard]},
  {path: "ManageAttendance",component:MarkAttandanceComponent,canActivate:[AuthGuard]},
  {path: "workinfo/:userid",component:WorkComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
