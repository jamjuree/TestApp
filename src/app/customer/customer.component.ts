import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from  '@angular/router';
import{CompanyService} from '../company.service';
import{CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
 providers:[CompanyService,CustomerService]

})
export class CustomerComponent implements OnInit {

  constructor(
  private router:Router,
  private activeRoute:ActivatedRoute,
  private CompanyService: CompanyService,
   private CustomerService: CustomerService


  ) { }
companydata=[];

mode:string="ADD";
   id:number =0;
   companyCode : string;

   customerCode:string ;
   customerName:string;

   customerdata=[];
  ngOnInit() {
    
    this.companyCode="001";
  this.loaddataCompany();
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
                     this.customerName = datas.customerName;
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
 this.router.navigate(['support','customer-list']);

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
      customerCode :this.customerCode,
      customerName :this.customerName,
      companyCode:this.companyCode

   }
   // let  company : Array <any>=[];
    // if(localStorage.getItem('company'))
    //   {
    //    company = JSON.parse(localStorage.getItem('company'));

    //   }
      //
      if(this.mode=="EDIT")
        {
          // company[this.id]=comp;

          this.CustomerService.updatebyItem(cusp,this.id).subscribe(

     datas=>{
               Materialize.toast('Update Complete',2000);
            this.router.navigate(['support','customer-list']);

             },
       err=>{
               console.log(err);
            });


          
        }
        else{

           this.CustomerService.addItem(cusp).subscribe(

     datas=>{
           Materialize.toast('Add Customer Complete',2000);
            this.router.navigate(['support','customer-list']);

             },
       err=>{
               console.log(err);
          });

        }
     
  }



}
