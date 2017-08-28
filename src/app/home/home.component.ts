import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // มันคุยกันได้จากตรงนี้ ระหว่าง home.component.html
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title:string="This is a title";
  show:boolean=true;
  listx=["one","two","three"];
  isactive: boolean = true;
  conditionExpression:string ="A"
  case1Exp="B";
 price:number=12345678.91333;
 currentdate = new Date();
  ngOnInit() {
  }
  // สร้าง function เอง
   onclick(){
    this.title="click already..."
    this.show = !this.show;
    
   }
}
