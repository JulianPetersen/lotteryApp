import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PublicacionSorteoComponent } from './publicacion-sorteo/publicacion-sorteo.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    PublicacionSorteoComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    PublicacionSorteoComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class ComponentModule { }
