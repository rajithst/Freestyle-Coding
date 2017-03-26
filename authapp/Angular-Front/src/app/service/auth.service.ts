import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {


  user:any;

  authtoken:any;



  constructor(
    private http:Http
  ) { }


  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).map(res=>res.json());
  }

  loginUser(user){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/user/login",user,{headers:headers}).map(res=>res.json());

  }

  getProfile(){


    this.fetchToken();

    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('Content-Type','application/json');
    return this.http.get("http://localhost:3000/user/profile",{headers:headers}).map(res=>res.json());

  }

  fetchToken(){

    const token = localStorage.getItem("tokenid");
    this.authtoken = token;

  }



  storeData(token,userdata){

    localStorage.setItem("tokenid",token);
    localStorage.setItem("user",JSON.stringify(userdata));
    this.authtoken = token;
    this.user= userdata
  }

  loggedIn() {

    return tokenNotExpired();
  }


  logout(){

    this.authtoken  = null;
    this.user = null;
    localStorage.clear();

  }





}
