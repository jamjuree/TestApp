import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
import{CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
    providers:[CustomerService]
})
export class CustomerListComponent implements OnInit {

  constructor(
      private router:Router,
    // เรียนกcompany service
    private CustomerService: CustomerService
  ) { }


searchText ="";
numPage =0;
rowPerPage=3;
total =0;
pageing=[];


customerdata=[];
  ngOnInit() {



 this.CustomerService.loadItem().subscribe(

     datas=>{
      this.customerdata= datas;

     },
    err=>{
      console.log(err);
    }


   );
//this.search();

  }

  // กดแล้วจะไปหน้า customer
onAddButtonClick()
{
 this.router.navigate(['support','customer']);

}
// delete
onDeleteButtonClick(id)
{
     //let idDel=  this.companydata[id]._id;
      // แบบนี้ก็ได้
        //  let idDel= this.companydata[id]._id;
          
 this.CustomerService.deleteItem(id).subscribe(

     datas=>{
           Materialize.toast('Delete Complete',2000);
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




this.router.navigate(['support','customer',id]);

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



search()
{
 let searchBody ={

  searchText : this.searchText,
  rowPerPage : this.rowPerPage,
  numPage: this.numPage
 }
   this.CustomerService.SearchItem(searchBody).subscribe(data=>
    {
    this.customerdata= data.rows;
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
