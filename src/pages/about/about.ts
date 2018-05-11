import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { WebappProvider } from '../../providers/webapp/webapp';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  categorias:any;

  constructor(public navCtrl: NavController, public proveedor: WebappProvider, public loadingCtrl: LoadingController) {

  }

  

  ionViewDidLoad(){

     this.loadingCtrl.create({
      content: 'Espere por favor ...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();  

  	this.proveedor.obtenerCategorias()
  	.subscribe(
  	(data)=> {this.categorias = data;},
  	(error) => {console.log(error);}

  		)

  }

   openSubcategoriaPage(categoria):void {

  	this.navCtrl.push('SubcategoriaPage',categoria);
   
  	console.log(categoria);

  }

}
