import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteDetalhesPage } from './cliente-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteDetalhesPage]
})
export class ClienteDetalhesPageModule {}
