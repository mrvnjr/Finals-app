import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegetablePageRoutingModule } from './vegetable-routing.module';

import { VegetablePage } from './vegetable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegetablePageRoutingModule
  ],
  declarations: [VegetablePage]
})
export class VegetablePageModule {}
