import { Component } from '@angular/core';
import {LoginService} from './login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biblioteca';
  isLogin = false;
  hide = false;

  constructor(private loginServ:LoginService)
  {
      this.isLogin = loginServ.isLogin();
  }

  salir()
  {
    this.loginServ.logout();
    this.isLogin = false;
  }
}
