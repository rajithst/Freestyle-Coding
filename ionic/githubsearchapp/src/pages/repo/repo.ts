import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import  { Requese } from '../../providers/requese';
/*
  Generated class for the Repo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repo',
  templateUrl: 'repo.html'
})
export class RepoPage {
  moredata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public Requests:Requese) {}

  ionViewDidLoad() {

    this.Requests.loadData(this.navParams.get('id')).subscribe(res=>{
      console.log(res);
      this.moredata = res;
    });


  }

  backClick(){
    this.navCtrl.pop();
  }

}
