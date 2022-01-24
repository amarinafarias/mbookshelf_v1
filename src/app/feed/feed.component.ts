import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DashboardService } from './../servicosInterface/dashboard.service';
import { Component } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, of} from 'rxjs';
import { Dashboard } from '../modelosInterface/dashboard';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  cards$: Observable<Dashboard[]>;
  usuario$=this.autenticacaoFirebaseService.usuarioLogado$;
  
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {
      this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError (erros =>{
          return of ([])
        })
      )
    }
}
