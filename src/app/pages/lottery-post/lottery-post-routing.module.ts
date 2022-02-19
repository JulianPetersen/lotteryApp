import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LotteryPostPage } from './lottery-post.page';

const routes: Routes = [
  {
    path: '',
    component: LotteryPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LotteryPostPageRoutingModule {}
