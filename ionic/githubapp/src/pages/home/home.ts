import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RepoPage } from '../repo/repo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  LoadRepo(){

    this.navCtrl.push(RepoPage);
  }

}
