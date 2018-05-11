import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the WebappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebappProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WebappProvider Provider');
  }

  obtenerCategorias(){

  		 return this.http.get('http://wooapi.vapearvzla.com/movil_categorias.php');
  	     //return this.http.get('http://wooapi.vapearvzla.com/movil_categorias.json');
  		
  }

  obtenerNovedades(){

       return this.http.get('http://wooapi.vapearvzla.com/movil_novedades.php');
         //return this.http.get('http://wooapi.vapearvzla.com/movil_categorias.json');
      
  }

   obtenerProductos(id_categoria){

  		return this.http.get('http://wooapi.vapearvzla.com/movil_productos.php?id_categoria='+id_categoria);
  }

  obtenerProductosId(id_categoria, id_producto){

  		return this.http.get('http://wooapi.vapearvzla.com/movil_productos.php?id_categoria='+id_categoria+'&id_producto='+id_producto);
  } 

  obtenerImgProductos(id_producto){

  		return this.http.get('http://wooapi.vapearvzla.com/movil_img_productos.php?id_producto='+id_producto);
  } 





}
