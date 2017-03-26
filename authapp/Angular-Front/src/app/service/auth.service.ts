import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {


  user:any;
  mytoken:string;
  myuserdata:any;

  constructor(
    private http:Http
  ) { }


  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).map(res=>res.json());
  }




}
