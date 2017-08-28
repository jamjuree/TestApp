import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// rxjs คือการเขียน โปรแกรม แบบ reactiveX
// 

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../environments/environment'


@Injectable()
export class CompanyService {
 options: RequestOptions;
  // 1.ใชprivate http:Http
  constructor(private http:Http) {

     let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + localStorage.getItem('token')
    });
this.options = new RequestOptions({ headers: headers });


   }

  loadItem(): Observable<any[]> {
    //เรียก localhost ของ ตัว Api company ใน project ISsue Api Day 4
    //reactiveX เสร็จแล้วจะบอก ทำแบบไม่รอกัน

    //***return this.http.get('http://localhost:3000/company')   ถูกเปลี่ยนไปดึงที่ Environment
    return this.http.get( `${environment.apiUrl}/company`, this.options)
      .map((res: Response) => { 
  //  ส่งผลกลับจากตรงนี้
        return  res.json() 
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

addItem(body): Observable<any> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post( 
      `${environment.apiUrl}/company`,bodyString, this.options) // ...using post request
      .map((res: Response) => {
        
            return res.json()}
      ) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }

  deleteItem(id): Observable<any> {
     //let id =   JSON.stringify(body)a=>{
      // id = 
     
     // mongodb.collection("company").find().toArray().then((data)=>{
    
  return this.http.delete( `${environment.apiUrl}/company/${id}`, this.options)
      .map((res: Response) => { 
  //  ส่งผลกลับจากตรงนี้
        return  res.json() 
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  

loadItemฺById(id): Observable<any> {
    //เรียก localhost ของ ตัว Api company ใน project ISsue Api Day 4
    //reactiveX เสร็จแล้วจะบอก ทำแบบไม่รอกัน

    //***return this.http.get('http://localhost:3000/company')   ถูกเปลี่ยนไปดึงที่ Environment
    return this.http.get( `${environment.apiUrl}/company/findById/${id}`, this.options)
      .map((res: Response) => { 
  //  ส่งผลกลับจากตรงนี้
        return  res.json() 
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  updatebyItem(body,id): Observable<any> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put( 
      `${environment.apiUrl}/company/${id}`,bodyString, this.options) // ...using post request
      .map((res: Response) => {
        
            return res.json()}
      ) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }



SearchItem(body): Observable<any> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post( 
      `${environment.apiUrl}/company/search`,bodyString,this.options) // ...using post request
      .map((res: Response) => {
        
            return res.json()}
      ) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }




}
