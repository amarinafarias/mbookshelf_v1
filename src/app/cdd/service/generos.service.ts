import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Generos } from './../modelos/generos';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private readonly urlAPI='/assets/generos.json'; //readonly para não permitir a modificação em outras partes do código.

  constructor(private clienteDados: HttpClient) { }

  listagemGeneros() { //metodo
    return this.clienteDados.get<Generos[]>(this.urlAPI)

  }
}
