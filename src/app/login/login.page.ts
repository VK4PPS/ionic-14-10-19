import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import {  MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string;
  senha : string;

  constructor(public afAuth: AngularFireAuth,
    private router : Router,
    private menuCtrl : MenuController, // Desativar o menu se não estiver logado
    private toastCtrl : ToastController) {
      
      this.menuCtrl.swipeEnable(false);
     }

  ngOnInit() {
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword( // Função de login ( firebase)
      this.email,this.senha).then(()=>{
        this.menuCtrl.swipeEnable(true); // se login correto = libera menu
        this.router.navigate(['/home']); // e redireciona para a home
        
      }).catch(err=>{ //login incorreto = mensagem de erro
        this.presentToast();
      })
  }
  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Login inválido',
      duration: 2000
    });
    toast.present();
  }


}
