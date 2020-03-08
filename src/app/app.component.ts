import { Component } from '@angular/core';
import {Router} from '@angular/router';
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

  constructor(private loginServ:LoginService,private router:Router)
  {
      this.isLogin = loginServ.isLogin();
  }

  salir()
  {
    this.loginServ.logout().subscribe((resp)=>{
      this.loginServ.removerToken();
      console.log(resp);
      this.router.navigate(["/"]);
    },(error)=>{
      console.log(error);
    });
    this.isLogin = false;
  }
}
