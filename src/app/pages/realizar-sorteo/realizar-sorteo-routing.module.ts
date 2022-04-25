import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealizarSorteoPage } from './realizar-sorteo.page';

const routes: Routes = [
  {
    path: '',
    component: RealizarSorteoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealizarSorteoPageRoutingModule {}
