import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallePage } from './detalle';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    DetallePage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(DetallePage),
  ],
})
export class DetallePageModule {}
