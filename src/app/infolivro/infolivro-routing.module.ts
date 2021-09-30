import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfolivroPage } from './infolivro.page';

const routes: Routes = [
  {
    path: '',
    component: InfolivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfolivroPageRoutingModule {}
