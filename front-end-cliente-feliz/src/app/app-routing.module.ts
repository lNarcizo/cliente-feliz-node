import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteComponent} from "./cliente/cliente.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {RegistroComponent} from "./registro/registro.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'clientes',
    component: ClienteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registrar',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
