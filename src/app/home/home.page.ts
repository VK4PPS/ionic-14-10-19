import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Cliente } from 'src/model/cliente';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaCliente : Cliente[] = []; //variavel que armazena os dados do cliente

  constructor(db: AngularFirestore, // Módulo do banco de dados
    private router : Router) {

    db.collection('clientes').get().subscribe(response=>{ //Solicita os dados de clientes cadastrados no FireBase
                                                          // Response retorna um objeto do FB, precisamos converter em um objeto cliente
      response.forEach(doc=>{ // forEach equivalentes ao for, percorre os elementos do FB
                              // cada um é chamado de doc, assim convertendo um doc em cliente.

        let c = new Cliente(); //Cria um novo objeto cliente
        c.setCliente(doc.data(),doc.id); // coloca os dados do doc em clientes

        this.listaCliente.push(c); // adiciona este cliente a lista
       },err=>{ // Em caso de erro, mostra a mensagem no log
        console.log(err);
      })
    })
  }
  
goPage(idValue : string){
  this.router.navigate(['cliente-datalhes',{id : idValue}]);
}


}
