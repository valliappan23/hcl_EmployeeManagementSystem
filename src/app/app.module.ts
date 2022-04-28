import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
import { ViewComponent } from './view/view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddAttandanceComponent } from './add-attandance/add-attandance.component';
import { MarkAttandanceComponent } from './mark-attandance/mark-attandance.component';
import { WorkComponent } from './work/work.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeBodyComponent,
    AboutComponent,
    LoginComponent,
    AdduserComponent,
    EdituserComponent,
    DashboardComponent,
    ManagementComponent,
    ViewComponent,
    AddAttandanceComponent,
    MarkAttandanceComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
