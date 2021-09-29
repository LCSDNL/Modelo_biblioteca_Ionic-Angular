import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecarioPage } from './bibliotecario.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecarioPageRoutingModule {}
