import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate:[AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule),
    
  },
  {
    path: 'lottery-post',
    loadChildren: () => import('./pages/lottery-post/lottery-post.module').then( m => m.LotteryPostPageModule)
  },
  {
    path: 'category-selected/:id',
    loadChildren: () => import('./pages/category-selected/category-selected.module').then( m => m.CategorySelectedPageModule)
  },
  {
    path: 'my-account/:id',
    loadChildren: () => import('./pages/my-account/my-account.module').then( m => m.MyAccountPageModule)
  },  {
    path: 'realizar-sorteo',
    loadChildren: () => import('./pages/realizar-sorteo/realizar-sorteo.module').then( m => m.RealizarSorteoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
