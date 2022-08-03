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
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'vegetable',
        loadChildren: () => import('../vegetable/vegetable.module').then( m => m.VegetablePageModule)
      },
      {
        path: 'fruits',
        loadChildren: () => import('../fruits/fruits.module').then( m => m.FruitsPageModule)
      },
      {
        path: 'diet',
        loadChildren: () => import('../diet/diet.module').then( m => m.DietPageModule)
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
