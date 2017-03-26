import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:String;
  username:String;
  email:String;
  password:String;


  constructor(
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router

  ) { }

  ngOnInit() {
  }


  registerData(){

    const user = {
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password
    };


    this.authService.registerUser(user).subscribe(res=>{

      if(res.state) {
        this.flashMessage.show("You're registered", {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);

      }else {
        this.flashMessage.show("something went wrong", {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }

});

  }

}
