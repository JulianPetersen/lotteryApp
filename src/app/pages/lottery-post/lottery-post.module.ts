import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotteryPostPageRoutingModule } from './lottery-post-routing.module';

import { LotteryPostPage } from './lottery-post.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LotteryPostPageRoutingModule,
    ComponentModule
  ],
  declarations: [LotteryPostPage]
})
export class LotteryPostPageModule {}
