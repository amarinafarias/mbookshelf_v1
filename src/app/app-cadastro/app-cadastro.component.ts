import { FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

//função para passar elementos para outros validadores
export function passwordMatchValidator():ValidatorFn {
  return(control: AbstractControl):ValidationErrors | null =>{  // o controle abstrato vai fazer uma validação de erro
    const senha = control.get('senha')?.value;
    const confirma = control.get('confirmaSenha')?.value;

    if (senha && confirma && senha !==confirma){ //esse if compara se a senha e o confirmaSenha são diferentes
      return {                                    //é um if para verificar o erro e não o acerto
        senhaConfirmada:true
      }
    }
    return null;
  }
}


@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss']
})
export class AppCadastroComponent implements OnInit {

  formularioCadastro = this.loginBuilder.group({
    nome: new FormControl ('', Validators.required),
    email: new FormControl ('', [Validators.required, Validators.email]),
    senha: new FormControl ('', Validators.required),
    confirmaSenha: new FormControl ('', Validators.required)
  }, {validator: passwordMatchValidator()});

  constructor(private loginBuilder: FormBuilder) { }

  get nome(){
    return this.formularioCadastro.get('nome')
  }

  get email(){
    return this.formularioCadastro.get('email')
  }

  get senha(){
    return this.formularioCadastro.get('senha')
  }

  get confirmaSenha(){
    return this.formularioCadastro.get('confirmaSenha')
  }

  enviaCadastro(){
    alert('Parabéns!')
  }

  ngOnInit(): void {
  }

}
