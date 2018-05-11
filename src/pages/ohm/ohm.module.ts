import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OhmPage } from './ohm';

@NgModule({
  declarations: [
    OhmPage,
  ],
  imports: [
    IonicPageModule.forChild(OhmPage),
  ],
})
export class OhmPageModule {}
