import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthymealsPage } from './healthymeals.page';

const routes: Routes = [
  {
    path: '',
    component: HealthymealsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthymealsPageRoutingModule {}
