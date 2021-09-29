import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'leitor',
    loadChildren: () => import('./leitor/leitor.module').then( m => m.LeitorPageModule)
  },
  {
    path: 'bibliotecario',
    loadChildren: () => import('./bibliotecario/bibliotecario.module').then( m => m.BibliotecarioPageModule)
  },
  {
    path: 'editlivro',
    loadChildren: () => import('./editlivro/editlivro.module').then( m => m.EditlivroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
