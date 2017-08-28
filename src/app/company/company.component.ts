import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from  '@angular/router';

import{CompanyService} from '../company.service';
//11ActivatedRoute เพิ่มมาเพราะจะใช้ หน้า company
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers:[CompanyService]
})
export class CompanyComponent implements OnInit {

  //constructor() { }

  constructor(private router:Router,
  private activeRoute:ActivatedRoute,
  private CompanyService: CompanyService
  ) { 




  }
   mode:string="ADD";
   id:number =0;
   companyCode:string ;
   companyName:string;

   companydata=[];
  ngOnInit() {

    // rouuc
      this.activeRoute.params.subscribe(params=>{

        if(params['id']){

          let id = params['id'];
              //let companyData= JSON.parse(localStorage.getItem('company'));
                // let companyData[];
              this.CompanyService.loadItemฺById(id).subscribe(

                 datas=>{
                      // this.companydata= datas;
                       // let company= this.companydata[0]
                     this.companyCode= datas.compCode;
                     this.companyName = datas.compName;

                     },
                   err=>{
                    console.log(err);
                   }


             );



          // let company= this.companydata[0]
          // this.companyCode= company.compCode;
          // this.companyName = company.compName;

          Materialize.updateTextFields();
          this.mode="EDIT";
          this.id=id;
         
        }
        // ข้อความ กับ text จะสวยงาม
         Materialize.updateTextFields();
      }
      
      );
     // let id =  this.activeRoute.params["id"];
  }

  onSave2()
  {
   let comp=
   {
      compCode :this.companyCode,
      compName :this.companyName

   }
    let  company : Array <any>=[];
    if(localStorage.getItem('company'))
      {
       company = JSON.parse(localStorage.getItem('company'));

      }
      //
      if(this.mode=="EDIT")
        {
          company[this.id]=comp;
           Materialize.toast('Update Complete',4000);
        }
        else{
          company.push(comp);
           Materialize.toast('Save Complete',4000);
        }
      localStorage.setItem('company',JSON.stringify(company));
      // 
      
       this.router.navigate(['support','company-list']);
  }

  onSave()
  {
   let comp=
   {
      compCode :this.companyCode,
      compName :this.companyName

   }
    let  company : Array <any>=[];
    // if(localStorage.getItem('company'))
    //   {
    //    company = JSON.parse(localStorage.getItem('company'));

    //   }
      //
      if(this.mode=="EDIT")
        {
          // company[this.id]=comp;

          this.CompanyService.updatebyItem(comp,this.id).subscribe(

     datas=>{
               Materialize.toast('Update Complete',2000);
            this.router.navigate(['support','company-list']);

             },
       err=>{
               console.log(err);
            });


          
        }
        else{

           this.CompanyService.addItem(comp).subscribe(

     datas=>{
           Materialize.toast('Add Item Complete',2000);
            this.router.navigate(['support','company-list']);

             },
       err=>{
               console.log(err);
          });

          //company.push(comp);
           //Materialize.toast('Save Complete',4000);
        }
     // localStorage.setItem('company',JSON.stringify(company));
      // 
      
     //  this.router.navigate(['support','company-list']);
  }

  oClickBack()
{
 this.router.navigate(['support','company-list']);

}

}
