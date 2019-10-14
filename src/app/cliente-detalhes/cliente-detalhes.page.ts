import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from 'src/model/cliente';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.page.html',
  styleUrls: ['./cliente-detalhes.page.scss'],
})
export class ClienteDetalhesPage implements OnInit {

id : string;
formGroup : FormGroup;
cliente : Cliente = new Cliente();

  constructor(private actRoute : ActivatedRoute,
  private formB : FormBuilder,
  private db : AngularFirestore,
  private toastCtrl : ToastController) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.formGroup = this.formB.group({
      nome: [],
      telefone: [],
      email : [],
    })
  }

  ngOnInit() {
    this.db.collection('cliente').doc(this.id).get().subscribe(response=>{
      this.cliente.id = this.id
      this.cliente.nome = response.data().nome;
      this.cliente.email = response.data().email;
      this.cliente.telefone = response.data().telefone;
    })
  }

  atualizar(){
    this.db.collection('clientes').doc(this.cliente.id).set(this.formGroup.value)
    .then(() =>{
      this.presentToast();
    }).catch(()=>{
      console.log('Erro ao Atualizar');
    })
    }

    async presentToast() {
      const toast = await this.toastCtrl.create({
        message: 'Atualizado com sucesso',
        duration: 2000
      });
      toast.present();
    }

  }
