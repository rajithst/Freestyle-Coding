import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(res=>{
      this.user = res.user;
      console.log(this.user)

    });
  }

}
