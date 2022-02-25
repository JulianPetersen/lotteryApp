import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorySelectedPage } from './category-selected.page';

const routes: Routes = [
  {
    path: '',
    component: CategorySelectedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorySelectedPageRoutingModule {}
