import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { WebappProvider } from '../../providers/webapp/webapp';
import { LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  novedades:any;

  constructor(private iab: InAppBrowser, public navCtrl: NavController, public proveedor: WebappProvider, public loadingCtrl: LoadingController) {

  }

  openInstagram(){

    this.iab.create('https://www.instagram.com/vapearvzla/');
  }

   openFacebook(){

    this.iab.create('https://www.facebook.com/vapearvzla');
  }

   openTwitter(){

    this.iab.create('https://twitter.com/vapearvzla?lang=es');
  }

    ionViewDidLoad(){

     this.loadingCtrl.create({
      content: 'Espere por favor ...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();  

  	this.proveedor.obtenerNovedades()
  	.subscribe(
  	(data)=> {this.novedades = data;},
  	(error) => {console.log(error);}

  		)

  }

}
