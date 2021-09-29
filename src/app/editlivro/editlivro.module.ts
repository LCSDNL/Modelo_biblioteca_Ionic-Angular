import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditlivroPageRoutingModule } from './editlivro-routing.module';

import { EditlivroPage } from './editlivro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditlivroPageRoutingModule
  ],
  declarations: [EditlivroPage]
})
export class EditlivroPageModule {}
