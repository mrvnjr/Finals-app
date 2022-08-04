import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MealplanPageRoutingModule } from './mealplan-routing.module';

import { MealplanPage } from './mealplan.page';
import { PlandaysModule } from '../plandays/plandays.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MealplanPageRoutingModule,
    PlandaysModule,
  ],
  declarations: [MealplanPage]
})
export class MealplanPageModule {}
