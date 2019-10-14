import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, ToastController } from '@ionic/angular';

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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ToastController
  ],
  declarations: [ClienteDetalhesPage]
})
export class ClienteDetalhesPageModule {}
