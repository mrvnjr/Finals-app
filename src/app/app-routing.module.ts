import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'front',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./sidenav/sidenav.module').then( m => m.SidenavPageModule)
  },
  {
    path: 'front',
    loadChildren: () => import('./front/front.module').then( m => m.FrontPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'healthymeals',
    loadChildren: () => import('./healthymeals/healthymeals.module').then( m => m.HealthymealsPageModule)
  },
  {
    path: 'info/:plandays',
    loadChildren: () => import('./plandays/info/info.module').then( m => m.InfoPageModule)
  },
  






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
