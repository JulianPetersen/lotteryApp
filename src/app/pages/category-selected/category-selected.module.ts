import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorySelectedPageRoutingModule } from './category-selected-routing.module';

import { CategorySelectedPage } from './category-selected.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorySelectedPageRoutingModule,
    ComponentModule
  ],
  declarations: [CategorySelectedPage]
})
export class CategorySelectedPageModule {}
