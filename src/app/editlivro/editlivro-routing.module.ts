import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditlivroPage } from './editlivro.page';

const routes: Routes = [
  {
    path: '',
    component: EditlivroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditlivroPageRoutingModule {}
