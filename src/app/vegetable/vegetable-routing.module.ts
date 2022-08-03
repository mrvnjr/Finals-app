import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegetablePage } from './vegetable.page';

const routes: Routes = [
  {
    path: '',
    component: VegetablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegetablePageRoutingModule {}
