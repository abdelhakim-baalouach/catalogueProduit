import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { Page404Component } from './page404/page404.component';


const routes: Routes = [

  {
    path: "",
    component: ProduitsComponent
  },

  {
    path: "products",
    component: ProduitsComponent
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
