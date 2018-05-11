import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

declare const google; 

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

 @ViewChild('map') mapElement: ElementRef;
  map: any;
  polylines: Array<object> = [];

  watchId: any;

  options = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0
  };

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public navParams: NavParams) {

  }

    ionViewDidLoad(){

     this.loadingCtrl.create({
      content: 'Espere por favor ...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();  

     let mapEle = this.mapElement.nativeElement;

    var myLatLng = {lat: 10.4837786, lng: -66.8456885};
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: myLatLng,
      mapTypeId: 'roadmap'
    });
    this.map.setCenter(myLatLng); 

    let infoWindow = new google.maps.InfoWindow({
            content: '<h4>Vapear Vzla</h4>Av. Los Araguayanes, Quinta Otoño<br> Urb. Chuao, Caracas, Venezuela.<br> Teléfonos: 0414-0131967<br> 0416-2103916 - 0424-7667450.'
    });

     

     let marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: 'CCSfdfs'
          });

    marker.addListener('click', () => {
            infoWindow.open(this.map, marker);
          });

 google.maps.event.addListenerOnce(this.map, 'idle', () => {
          mapEle.classList.add('map');
        });

     // start my map
    
  


  }

}
