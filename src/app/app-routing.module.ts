import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component'

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
//1addd] GuardService มาใช้
import {LoginGuardService} from './login-guard.service';
const routes: Routes = [
  {
    path: '',
    component: PublicZoneComponent, 
    children: [{
        path: '',
    component: HomeComponent, 
    },

      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'login',
        component:LoginComponent

      }
    ]
  }
  ,
  {
    path: 'support',
    component: SupportZoneComponent,
    //2addd] GuardService มาใช้ เวลา กอปpath ลูกที่อยู่ใน Support  http://localhost:4200/support/issue-list มาใช้เข้าไม่ได้
    canActivate:[LoginGuardService],
    children: [
      {
        path: '',
    component: UserListComponent, 
    },
  
      {
        path:'company',
        component:CompanyComponent

      },

      {
        // ไว้ใช้ แสดงการ Edit Company   เป็นการใช้ หน้า form พร้อมกัน
        path:'company/:id',
        component:CompanyComponent

      }

,
       {
        path:'company-list',
        component:CompanyListComponent

      }
      ,
       {
        path:'customer',
        component:CustomerComponent

      }
      ,
      {
        // ไว้ใช้ แสดงการ Edit Customer   เป็นการใช้ หน้า form พร้อมกัน
        path:'customer/:id',
        component:CustomerComponent

      }

      ,
       {
        path:'customer-list',
        component:CustomerListComponent

      }
      ,
       {
        path:'user',
        component:UserComponent

      }
,
       {
        path:'user/:id',
        component:UserComponent

      }
      ,
       {
        path:'user-list',
        component:UserListComponent

      }
       ,
       {
        path:'issue',
        component:IssueComponent

      }

      ,
       {
        path:'issue-list',
        component:IssueListComponent

      }




    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
