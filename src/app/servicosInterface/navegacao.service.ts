import { first, tap } from 'rxjs';
import { MenuNavegador } from './../modelosInterface/menuNavegador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {

  private readonly uriAPI='../assets/menuNavegador.json'

  constructor(private menuDados: HttpClient) { }

  listagemMenu(){
    return this.menuDados.get<MenuNavegador[]>(this.uriAPI)
    .pipe(
          first(), //para não ficar repetindo a busca
          tap(apiMenu => console.log(apiMenu))//apiMenu é uma variavel criada para uso temporário
    )
  }
}
