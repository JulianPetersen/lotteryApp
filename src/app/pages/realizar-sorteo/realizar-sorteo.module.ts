import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizarSorteoPageRoutingModule } from './realizar-sorteo-routing.module';

import { RealizarSorteoPage } from './realizar-sorteo.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizarSorteoPageRoutingModule,
    ComponentModule
  ],
  declarations: [RealizarSorteoPage]
})
export class RealizarSorteoPageModule {}
