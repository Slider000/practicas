import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
//modulo de formularios reactivos
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
// modulo http clien para consumir la api de nacionalidad
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
