import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeitorPage } from './leitor.page';

const routes: Routes = [
  {
    path: '',
    component: LeitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeitorPageRoutingModule {}
