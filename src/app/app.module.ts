import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
/*import { MatToolbarModule } from '@angular/material/toolbar'; Precisa estar aqui ou no app-material.module? pegadinha do professor*/
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-compartilhado/app-material/app-material.module';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /*MatToolbarModule, professor excluiu daqui e disse que depois veremos se é aqui ou no app-material.module(pegadinha) */
    HttpClientModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
