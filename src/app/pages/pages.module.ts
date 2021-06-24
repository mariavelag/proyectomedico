import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, IonicModule, PagesRoutingModule],
})
export class PagesModule {}
