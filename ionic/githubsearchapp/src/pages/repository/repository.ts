import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Service } from '../../providers/service';
/*
  Generated class for the Repository page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repository',
  templateUrl: 'repository.html'
})
export class RepositoryPage {

  data:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ServiceProvider:Service
  ) {}

  ionViewDidLoad() {

    this.ServiceProvider.moreRepo(this.navParams.get('id')).subscribe(res=>{
      console.log(res);
      this.data = res;

    });


  }

}
