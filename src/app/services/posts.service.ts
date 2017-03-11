import {Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";


@Injectable()
export  class  PostsService{
  url:string;
  baseUrl:string;

  constructor(private http:Http){
    //this.baseUrl = 'http://52.209.79.99:8080';
    this.baseUrl = 'http://localhost:5050';
    console.log('Post Service Initaislized');
  }
  getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").map(res=>res.json());
  }
  postRequest(serviceName:string,body:any){
    this.url =  this.makeUrl(serviceName);
  //  body = {userIds:'23218390821903'};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let bodySend = JSON.stringify(body);
    return this.http.post(this.url,bodySend, headers).map(res=>res.json());
  }

  readConfig(){
    return this.http.get("config.json")
      .map((res:any) => res.json());
  }
  makeUrl(serName:string):string{
    switch(serName){
      case 'INITIATE_PAYBACK':
         return this.baseUrl+'/zauto/operation/payback';
    }
  }
}

