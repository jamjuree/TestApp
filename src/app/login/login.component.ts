import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//  ใส่่ ค่า ใน private router:Router
 //this.router.navigate(['support','issue-list'])
  constructor(private router:Router) { }

  email:string;
  password:string;

  
  ngOnInit() {
  }
   dologin(){
     if( $(".invalid").length>0)
      {
            // alert('Invalid');
            Materialize.toast('Invalid',5000);
      }
          else
            {

               //alert('Success');
                // Materialize.toast('Success',5000);
                //
              //  window.localStorage.setItem('token','Login')
                 localStorage.setItem('token','Login')
                 this.router.navigate(['support','issue-list'])
            }

   }
}
