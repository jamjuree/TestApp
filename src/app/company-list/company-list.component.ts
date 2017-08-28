import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
import{CompanyService} from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers:[CompanyService]
})
export class CompanyListComponent implements OnInit {

  //constructor() { }

  constructor(
    private router:Router,
    // เรียนกcompany service
    private CompanyService: CompanyService
  
  )
   { }
companydata=[];


searchText ="";
numPage =0;
rowPerPage=2;
total =0;
pageing=[];
  ngOnInit() {

  //if(localStorage.getItem('company')){

   // this.companydata= JSON.parse(localStorage.getItem('company'));
  //}
  
  //subscribe คู่กับ  Observable ใน หน้า company service

  ///==================
  //  this.CompanyService.loadItem().subscribe(

  //    datas=>{
  //     this.companydata= datas;

  //    },
  //   err=>{
  //     console.log(err);
  //   }


  //  );
  //==

  this.search();
  }

  // กดแล้วจะไปหน้า Company
onAddButtonClick()
{
 this.router.navigate(['support','company']);

}
// delete
onDeleteButtonClick(id)
{
     //let idDel=  this.companydata[id]._id;
      // แบบนี้ก็ได้
        //  let idDel= this.companydata[id]._id;
          
 this.CompanyService.deleteItem(id).subscribe(

     datas=>{
           Materialize.toast('Delete Complete',3000);
           //
           this.loaddata(); },
       err=>{
               console.log(err);
          });


//this.companydata.splice(id,1) // 1 คือ ลบแค่ 1 ตัว ใส่ 2 จะลบ code ที่เหมือนกัน ออก 2 
//สามารบเป็นช่วงได้ refresh ข้อมูลจะกลับมา
// คำสั่งนี้ สั่งให้ลบ ออก จาก storage เลย
   //localStorage.setItem('company',JSON.stringify(this.companydata));



}



onEditButtonClick(id)
{



//สามารบเป็นช่วงได้ refresh ข้อมูลจะกลับมา
// คำสั่งนี้ สั่งให้ลบ ออก จาก storage เลย
this.router.navigate(['support','company',id]);

}

loaddata()
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

search()
{
 let searchBody ={

  searchText : this.searchText,
  rowPerPage : this.rowPerPage,
  numPage: this.numPage
 }
   this.CompanyService.SearchItem(searchBody).subscribe(data=>
    {
    this.companydata= data.rows;
    this.total=data.total;
    this.rendorPaging();


    },error=> {
          console.log(error);

    } );
}

rendorPaging()
{

let allPage = Math.ceil(this.total/this.rowPerPage);
this.pageing=[];
for (let i=0; i <allPage; i++)
  {
     this.pageing.push(i+1);

  }

}

gotoPage(pId)
{
  this.numPage=pId;
  this.search();

}


}
