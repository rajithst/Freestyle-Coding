import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {

  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }

  searchRepo(data:any){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("https://api.github.com/search/repositories?q="+data.keyword+"+language:"+data.lang).map(res=>res.json());


  }

  moreRepo(id:any){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get("https://api.github.com/repositories/"+id).map(res=>res.json());
  }

}
