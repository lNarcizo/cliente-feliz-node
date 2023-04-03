import { Injectable } from '@angular/core';
import {Usuario} from "./usuario";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Usuario)
  {
    let bodyData = {
      "email" : usuario.email,
      "senha" : usuario.senha,
    };

    this.http.post("http://localhost:3333/usuario/login",bodyData).subscribe((resultData: any)=>
    {
      this.usuarioAutenticado = resultData.authenticated

      if (this.usuarioAutenticado) {

        this.router.navigate(['/clientes']);

      }


    });
  }

  logout()
  {
    this.usuarioAutenticado = false;
    this.router.navigate(['/login']);
  }

  usuarioEstaAutenticado()
  {
    return this.usuarioAutenticado;
  }
}
