import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {usuario:'admin',password:'123456'}
  mensaje = "";
  hide = true;

  constructor(private loginServ:LoginService) { }

  ngOnInit(): void {
  }

  Ingresar()
  {
    this.loginServ.login(this.user).subscribe((resp)=>{
       console.log(resp);
    },(error)=>{
      console.log(error);
    });
  }

}
