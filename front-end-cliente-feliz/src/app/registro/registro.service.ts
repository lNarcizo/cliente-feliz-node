import { Injectable } from '@angular/core';
import {Usuario} from "./usuario";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient, private router: Router) { }

  registra(usuario: Usuario)
  {
    let bodyData = {
      "nome": usuario.nome,
      "email" : usuario.email,
      "password" : usuario.senha,
    };

    this.http.post("http://localhost:3333/usuario/cadastro",bodyData).subscribe((resultData: any)=>
    {

      if (resultData.created) {

        this.router.navigate(['/login']);

      } else {
        alert("Erro ao rgistrar cliente");
      }


    });
  }
}
