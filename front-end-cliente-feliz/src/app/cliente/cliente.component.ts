import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../login/auth.service";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent
{


  ClienteArray : any[] = [];
  clienteId = "";

  nome: string ="";
  email: string ="";
  documento: string ="";

  constructor(private http: HttpClient, private authService: AuthService )
  {
    this.buscaTodosClientes();
  }
  buscaTodosClientes() {

    this.http.get("http://localhost:3333/cliente/listar-todos")
      .subscribe((resultData: any) =>
      {
        this.ClienteArray = resultData;
      });


  }

  setUpdate(data: any)
  {
    this.nome = data.nome;
    this.email = data.email;
    this.documento = data.documento;

    this.clienteId = data.id;

  }

  UpdateRecords()
  {
    let bodyData = {
      "id": this.clienteId,
      "nome" : this.nome,
      "email" : this.email,
      "documento" : this.documento,

    };

    this.http.put("http://localhost:3333/cliente/edicao", bodyData).subscribe((resultData: any)=>
    {
      alert("Cliente atualizado");
      this.buscaTodosClientes();

    });
  }

  setDelete(data: any) {

    this.http.delete("http://localhost:3333/cliente/excluir/" + data.id).subscribe((resultData: any)=>
    {

      alert("Cliente deletado");
      this.buscaTodosClientes();

    });
  }

  save()
  {
    if(this.clienteId == '')
    {
      this.registra();
    }
    else
    {
      this.UpdateRecords();
    }

  }

  registra()
  {

    let bodyData = {
      "nome" : this.nome,
      "email" : this.email,
      "documento" : this.documento,
    };
    this.http.post("http://localhost:3333/cliente/cadastro",bodyData).subscribe((resultData: any)=>
    {
      alert("Cliente criado com sucesso")

      this.nome = '';
      this.email = '';
      this.documento  = '';
      this.buscaTodosClientes();
    });
  }

  logout()
  {
    this.authService.logout();
  }
}
