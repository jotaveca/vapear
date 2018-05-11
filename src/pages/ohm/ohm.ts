import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


/**
 * Generated class for the OhmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ohm',
  templateUrl: 'ohm.html',
})
export class OhmPage {

	@ViewChild ('alambre') alambre;
	@ViewChild ('ohm') ohm;	
	showCard = false;
	alambre_select;
	ohm_select;
	vueltas;
	ohm_salida;
	diametro;



  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OhmPage');
    this.alambre_select = 'k';
    this.ohm_select = '0.26';
    this.vueltas = 0;
    this.ohm_salida = 0;
    this.diametro = 0;
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Por favor seleccione',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  calcularOhm(){
  	//console.log("CLICK ", this.vueltas.value, this.diametro.value);

  	if (this.alambre.value == 'k'){

  		//this.showToast('middle');
  		this.showCard = true;

  		switch (this.ohm.value) {
            case '0.26':
                this.vueltas = 6;
		        this.ohm_salida =  this.ohm.value;
		        this.diametro = 30;
                break;
            case '0.27':
                this.vueltas = 7;
		        this.ohm_salida =  this.ohm.value;
		        this.diametro = 25;
                break;
            case '0.30':
                this.vueltas = 6;
		        this.ohm_salida =  this.ohm.value;
		        this.diametro = 25;
                break;
            default:

        }

  		
  		

  	}
  	//this.calculo = this.vueltas.value / this.diametro.value;

  }

}
