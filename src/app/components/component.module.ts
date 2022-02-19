import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PublicacionSorteoComponent } from './publicacion-sorteo/publicacion-sorteo.component';
import { HeaderComponent } from './header/header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicacionSorteoComponent,
    HeaderComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    PublicacionSorteoComponent,
    HeaderComponent,
    MenuLateralComponent
  ]
})
export class ComponentModule { }
