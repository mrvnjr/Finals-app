import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthymealsPageRoutingModule } from './healthymeals-routing.module';

import { HealthymealsPage } from './healthymeals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthymealsPageRoutingModule
  ],
  declarations: [HealthymealsPage]
})
export class HealthymealsPageModule {}
