import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
