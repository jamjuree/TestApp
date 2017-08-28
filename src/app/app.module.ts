import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PublicZoneComponent } from './public-zone/public-zone.component';
import { SupportZoneComponent } from './support-zone/support-zone.component';
import { CompanyComponent } from './company/company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { IssueComponent } from './issue/issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';
// //1addd] Add มาใช้ 
import {LoginGuardService} from './login-guard.service';
import { FormsModule } from '@angular/forms';
import { TranfPipe } from './tranf.pipe';

import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PublicZoneComponent,
    SupportZoneComponent,
    CompanyComponent,
    CompanyListComponent,
    CustomerComponent,
    CustomerListComponent,
    UserComponent,
    UserListComponent,
    IssueComponent,
    IssueListComponent,
    TranfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ไว้ทำ ng model
    FormsModule,
    
    HttpModule
  ],
  // ///2addd] Add LoginGuardService ใน Providers 
  providers: [LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
