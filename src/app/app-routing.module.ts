import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const enviarSemLogin = () => redirectUnauthorizedTo(['app-app-cadasatro'])

const routes: Routes = [

  { path:'', pathMatch:'full', redirectTo:'feed'},
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(m => m.CddModule), //comando comum pra fazer guarda
    ...canActivate(enviarSemLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
