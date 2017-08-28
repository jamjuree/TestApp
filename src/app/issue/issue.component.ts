import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from  '@angular/router';
import{CompanyService} from '../company.service';
import{CustomerService} from '../customer.service';
import{UserService} from '../user.service';
import{IssueService} from '../issue.service';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css'],
  providers:[CompanyService,CustomerService,UserService,IssueService]
})
export class IssueComponent implements OnInit {

  constructor(

  private router:Router,
  private activeRoute:ActivatedRoute,
  private CompanyService: CompanyService,
  private CustomerService: CustomerService,
  private UserService: UserService,
  private IssueService: IssueService,


  ) 
  
  
  { }

  issueNo:string ;
  issueDate :string ;
  titleIssue :string ;
  description :string ;
  status :string ;
companydata=[];
userdata=[];
userCode:string ;
mode:string="ADD";
   id:number =0;
   companyCode : string;
   customerCode:string ;


   customerdata=[];
  ngOnInit() {
    
    this.companyCode="001";
  this.loaddataCompany();
   this.loaddataCustomer();
   this.loaddataUser();
   this.activeRoute.params.subscribe(params=>{

        if(params['id']){

          let id = params['id'];
              //let companyData= JSON.parse(localStorage.getItem('company'));
                // let companyData[];
              this.CustomerService.loadItemฺById(id).subscribe(

                 datas=>{
                      // this.companydata= datas;
                       // let company= this.companydata[0]
                     this.customerCode= datas.customerCode;
                   //  this.customerName = datas.customerName;
                     this.companyCode=  datas.companyCode;
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
 this.router.navigate(['support','issue-list']);

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

loaddataCustomer()
{
  this.CustomerService.loadItemฺByComp(this.companyCode).subscribe(

     datas=>{
      this.customerdata= datas;

     },
    err=>{
      console.log(err);
    }


   );

}
loaddataUser()
{
  this.UserService.loadItem().subscribe(

     datas=>{
      this.userdata= datas;

     },
    err=>{
      console.log(err);
    }


   );

}


loaddata()
{
  this.CustomerService.loadItem().subscribe(

     datas=>{
      this.customerdata= datas;

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
     issueNo: this.issueNo,
       companyCode:this.companyCode,
      customerCode :this.customerCode,
      issueDate:this.issueDate,
      titleIssue:this.titleIssue,
      description:this.description,
      userCode: this.userCode,
     status:this.status
      //customerName :this.customerName,
    

   }
   
      if(this.mode=="EDIT")
        {
          // company[this.id]=comp;

          this.CustomerService.updatebyItem(cusp,this.id).subscribe(

     datas=>{
               Materialize.toast('Update Complete',2000);
            this.router.navigate(['support','issue-list']);

             },
       err=>{
               console.log(err);
            });


          
        }
        else{

           this.IssueService.addItem(cusp).subscribe(

     datas=>{
           Materialize.toast('Add Issue Complete',2000);
            this.router.navigate(['support','issue-list']);

             },
       err=>{
               console.log(err);
          });

        }
     
  }



}
