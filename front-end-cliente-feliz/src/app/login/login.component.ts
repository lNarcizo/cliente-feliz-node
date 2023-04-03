import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {Usuario} from "./usuario";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario: Usuario;
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  login()
  {
    this.authService.login(this.usuario);
  }
}
