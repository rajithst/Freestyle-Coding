import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Requese provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Requese {

  constructor(public http: Http) {

  }

  RequestToapi(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://api.github.com/search/repositories?q='+user.term+'language:'+user.lang).map(res=>res.json());
  }

  loadData(id:any){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('https://api.github.com/repositories/'+id).map(res=>res.json());
  }



}
