import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddlivroPage } from './addlivro.page';

const routes: Routes = [
  {
    path: '',
    component: AddlivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddlivroPageRoutingModule {}
