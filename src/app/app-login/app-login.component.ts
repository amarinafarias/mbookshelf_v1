import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl ('', Validators.required),
  });

  constructor(
    private loginBuilder: FormBuilder,
    private toast: HotToastService,
    @Inject(MAT_DIALOG_DATA ) public conteudo:string,
    private autenticacaoFirebaseService:AutenticacaoFirebaseService
    ) {}

    get email(){
      return this.formularioLogin.get('email')
    }

    get senha(){
      return this.formularioLogin.get('senha')
    }
    
    loginFirebase(){
      if(!this.formularioLogin.valid){
        return;
      }
      const {email, senha} = this.formularioLogin.value;
      this.autenticacaoFirebaseService.loginUsuario(email, senha)
      .pipe(
        this.toast.observe({
          success: 'Login valido, obrigado',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, confira as informações.'
        })
      ).subscribe(()=>{
        this.rotas.navigate(['/cdd'])
      })
  }
  onSubmit() {
  }
}
