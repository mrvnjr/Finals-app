import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidenavPage } from './sidenav.page';

const routes: Routes = [
  {
    path: 'nav',
    component: SidenavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'healthymeals',
        loadChildren: () => import('../healthymeals/healthymeals.module').then( m => m.HealthymealsPageModule)
      },
      {
        path: 'mealplan',
        loadChildren: () => import('../mealplan/mealplan.module').then( m => m.MealplanPageModule)
      }
      
      /*
      {
        path: '',
        redirectTo: '/nav/home',
        pathMatch: 'full'
      } */
    ]
  },

  {
    path: '',
    redirectTo: '/nav/home',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidenavPageRoutingModule {}
