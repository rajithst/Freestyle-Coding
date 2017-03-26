import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;

  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private route:Router
  ) { }

  ngOnInit() {
  }

  loginUser(){

    const user = {
      email:this.email,
      password:this.password
    };

    this.authService.loginUser(user).subscribe(res=>{

      if(res.state){

        this.authService.storeData(res.token,res.user)
        this.flashMessage.show("You're loggedin", {cssClass: 'alert-success', timeout: 3000});

      }else{

        this.flashMessage.show(res.msg, {cssClass: 'alert-success', timeout: 3000});
      }


    });


  }

}
