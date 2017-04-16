import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private network: Network,private toastCtrl: ToastController,public navCtrl: NavController) {

  }


  getNetwork(networkStatus:string){

    let networkType = this.network.type;

if(networkType == "unknown" || networkType=="none"){

    this.toastCtrl.create({
      message: ` Your Network is not Available`,
      duration: 5000,
      position: 'top'
    }).present();


  } else {

      this.toastCtrl.create({
      message: ` Your ${networkType} is ${networkStatus}`,
      duration: 5000,
      position: 'top'
    }).present();

  }


  }


  ionViewDidEnter(){
    
    this.network.onConnect().subscribe(data=>{
      
      //console.log(data)
      this.getNetwork(data.type);
    }
      
    , error=>console.log(error));

    this.network.onDisconnect().subscribe(data=>{
      
      //console.log(data);
      this.getNetwork(data.type);
    }
    
    , error=>console.log(error));
  }


}
