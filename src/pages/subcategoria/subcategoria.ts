import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebappProvider } from '../../providers/webapp/webapp';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the SubcategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategoria',
  templateUrl: 'subcategoria.html',
})
export class SubcategoriaPage {

  articuloCategoria:any;
  articulos:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,  public proveedor: WebappProvider, public loadingCtrl: LoadingController) {
  	this.articuloCategoria = this.navParams.data;
  }

 
  openDetallePage(articulo):void {
  	this.navCtrl.push('DetallePage',articulo);
  	//console.log(articulo);

  }



  ionViewDidLoad() {

     this.loadingCtrl.create({
      content: 'Espere por favor ...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();  
     
    console.log('ionViewDidLoad SubcategoriaPage');
    this.proveedor.obtenerProductos(this.articuloCategoria.term_id)
  	.subscribe(
  	(data)=> {this.articulos = data;},
  	(error) => {console.log(error);}


  		)


  }

}
