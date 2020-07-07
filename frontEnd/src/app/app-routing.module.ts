import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {Page404Component} from './page404/page404.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },

  {
    path: 'products',
    component: ProductsComponent
  },

  {
    path: '**',
    component: Page404Component,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
