import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebappProvider } from '../../providers/webapp/webapp';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

	articuloDetalle:any;
	//images = ['dolphin5-600x600.jpg','Stick-prince6-600x600.jpg','rx_gen3.jpg'];
	images:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: WebappProvider, public loadingCtrl: LoadingController) {
  	this.articuloDetalle = this.navParams.data;
  	//console.log(this.articuloDetalle );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
    //console.log(this.articuloDetalle.id);
    this.loadingCtrl.create({
      content: 'Espere por favor ...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();  

    this.proveedor.obtenerImgProductos(this.articuloDetalle.id)
  	.subscribe(
  	(data)=> {this.images = data; console.log(data);},
  	(error) => {console.log(error);}


  		)
  }

}
