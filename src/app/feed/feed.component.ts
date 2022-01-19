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
  usuario={userName:'Marina Farias', icone:'remember_me'}
  /** Based on the screen size, switch from standard to one column per row */
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
    private dashboardService: DashboardService
    ) {
      this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError (erros =>{
          return of ([])
        })
      )
    }
}
