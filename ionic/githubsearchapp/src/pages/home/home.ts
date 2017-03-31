import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import  { Requese } from '../../providers/requese';
import  { RepoPage } from '../repo/repo';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  language:string;
  key:string;
  user:Object;
  data:any;
  id:any;
  constructor(
    public navCtrl: NavController,
    public Requests:Requese
  ) {

  }

  searchData(key){

    const user = {
      lang:this.language,
      term : key.target.value
  };

    this.Requests.RequestToapi(user).subscribe(res=>{

      this.data = res.items;
    });

  }

  clicklink(id){
    this.navCtrl.push(RepoPage,{id:id});


  }

}
