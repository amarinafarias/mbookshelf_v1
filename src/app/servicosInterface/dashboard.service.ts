import { tap, first } from 'rxjs';
import { Dashboard } from './../modelosInterface/dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  private readonly uriAPI='../../assets/dashboard.json'; //end point

constructor(private cardsDashboard:HttpClient) { }

listagemCards(){
return this.cardsDashboard.get<Dashboard[]>(this.uriAPI)
.pipe(
  first(),
  tap(apiDasboard => console.log(apiDasboard))
)

}
}
