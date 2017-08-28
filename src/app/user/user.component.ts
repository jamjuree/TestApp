import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from  '@angular/router';
import{CompanyService} from '../company.service';
import{UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[CompanyService,UserService]
})
export class UserComponent implements OnInit {

  constructor(

  private router:Router,
  private activeRoute:ActivatedRoute,
  private CompanyService: CompanyService,
   private UserService: UserService

  ) 
  
  
  { }

  companydata=[];

mode:string="ADD";
   id:number =0;
   userCode : string;

   userName:string ;
   lastName:string;
    _typeUser:string;
     Level:string;

   userdata=[];

  ngOnInit() {

   // this.loaddataCompany();
   this.activeRoute.params.subscribe(params=>{

        if(params['id']){

          let id = params['id'];
              //let companyData= JSON.parse(localStorage.getItem('company'));
                // let companyData[];
              this.UserService.loadItemฺById(id).subscribe(

                 datas=>{
                      // this.companydata= datas;
                       // let company= this.companydata[0]
                     this.userCode= datas.userCode;
                     this.userName = datas.userName;
                     this.lastName=  datas.lastName;
                     this._typeUser=  datas._typeUser;
                     this.Level=  datas.Level;
                     },
                   err=>{
                    console.log(err);
                   }


             );


          Materialize.updateTextFields();
          this.mode="EDIT";
          this.id=id;
         
        }
        // ข้อความ กับ text จะสวยงาม
         Materialize.updateTextFields();
        
      }
      
      );
  }

   oClickBack()
{
 this.router.navigate(['support','user-list']);

}

loaddataCompany()
{
  this.CompanyService.loadItem().subscribe(

     datas=>{
      this.companydata= datas;

     },
    err=>{
      console.log(err);
    }
   );
}


onSave()
  {
   let cusp=
   {
  
        userCode: this.userCode,
       userName: this.userName ,
        lastName: this.lastName,
        _typeUser:this._typeUser,
        Level  : this.Level
     
   }
   
      if(this.mode=="EDIT")
        {
          // company[this.id]=comp;

          this.UserService.updatebyItem(cusp,this.id).subscribe(

     datas=>{
               Materialize.toast('Update Complete',2000);
            this.router.navigate(['support','user-list']);

             },
       err=>{
               console.log(err);
            });


          
        }
        else{

           this.UserService.addItem(cusp).subscribe(

     datas=>{
           Materialize.toast('Add User Complete',2000);
            this.router.navigate(['support','user-list']);

             },
       err=>{
               console.log(err);
          });

        }
     
  }



}

