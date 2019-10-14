import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.page.html',
  styleUrls: ['./cliente-cadastro.page.scss'],
})
export class ClienteCadastroPage implements OnInit {

formGroup : FormGroup;

  constructor(private formB : FormBuilder,
    private db : AngularFirestore,
    private toastCtrl : ToastController) { 
      this.formGroup = this.formB.group({
        nome : ['', Validators.required],
        telefone : ['', Validators.required],
        email : ['', Validators.required],
      });
    }

  ngOnInit() {
  }

  cadastrar(){
    this.db.collection('clientes')
    .add(this.formGroup.value).then(() =>{
      this.presentToast();
    }).catch(()=>{
      console.log("Erro ao cadastrar!")
    })
    }

async presentToast() {
  const toast = await this.toastCtrl.create({
    message: 'Cadastrado com sucesso',
    duration: 2000
  });
  toast.present();
}
}
