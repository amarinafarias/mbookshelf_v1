import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent {
//Itens do Menu primcipal
  tituloNav='BookShelf v1';
  usuario={userName:'Marina Farias', icone:'remember_me'};
  //Itens da Barra superior
  tituloBarra='[Sua Estante Virtual]';
  //Itens de icones e imagens de navegação.
  iconeGeral='../../assets/imagens/ShelfBook.png';
  lIcone='80';
  aIcone='80';
  //Controle das rotas do menu.
  itensMenu = [
    {linkMenu:'/cdd', labelMenu:'Classes Deway', hab:true},
    {linkMenu:'/feed', labelMenu:'Feed de Notícias', hab:true},
    {linkMenu:'/clube', labelMenu:'Página Usuário', hab:false},
    {linkMenu:'/leitura', labelMenu:'Clubes de Leitura', hab:false}, //o item existe, mas por hab:false, não dá pra logar.
    {linkMenu:'/estante', labelMenu:'Estante Particular', hab:false},

  ]


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
