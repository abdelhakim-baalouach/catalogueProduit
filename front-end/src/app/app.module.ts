import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { Page404Component } from './page404/page404.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import {ProduitsService} from './produits/services/produits.service';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    Page404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProduitsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
