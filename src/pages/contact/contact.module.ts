import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [ContactPage],
  imports: [IonicImageViewerModule, IonicPageModule.forChild(ContactPage)],
  exports: [ContactPage]
})
export class ContactPageModule { }
