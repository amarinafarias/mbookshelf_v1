import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Generos } from './../modelos/generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private readonly urlAPI='/assets/generos.json'; //readonly para não permitir a modificação em outras partes do código.

  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() { //metodo
    return this.clienteDados.get<Generos[]>(this.urlAPI)// o construtor é cliente dados, mas onde está clientedados? Este clientedados eu contrui injetando nele o httpClient, a base para vc trazer o httpClient está no urlAPI
    .pipe(
      delay(5000),
      first(),
      tap(apiGeneros => console.log(apiGeneros))
    )

  }
}
