import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PublicacionSorteoComponent } from './publicacion-sorteo/publicacion-sorteo.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublicacionSorteoComponent,
    HeaderComponent,
    MenuComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PublicacionSorteoComponent,
    HeaderComponent,
    MenuComponent,
    UpdateUserComponent
  ]
})
export class ComponentModule { }
