import { RouterModule, Routes } from '@angular/router';

import { CanLoadRouteGuard } from './modules/core/guards/can-load-route.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canLoad: [CanLoadRouteGuard]
  },
  {
    path: 'transaction',
    loadChildren: () => import('./modules/transaction/transaction.module').then(m => m.TransactionModule),
    canLoad: [CanLoadRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
