import {Component, OnInit} from '@angular/core';
import {Usuario} from './usuario';
import {RegistroService} from "./registro.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;

  constructor(private service: RegistroService) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  registra()
  {
      this.service.registra(this.usuario);
  }

}
