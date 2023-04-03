import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ClienteComponent} from "./cliente/cliente.component";
import { LoginComponent } from './login/login.component';
import {AuthService} from "./login/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import { RegistroComponent } from './registro/registro.component';
import {RegistroService} from "./registro/registro.service";

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    RegistroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
