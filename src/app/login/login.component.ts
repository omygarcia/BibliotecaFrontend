import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {username:'admin',password:'123456'}
  mensaje = "";
  hide = true;
  progressVisible = false;

  constructor(private loginServ:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  Ingresar()
  {
    this.progressVisible = true;
    this.loginServ.login(this.user).subscribe((resp)=>{
       console.log(resp);
       this.loginServ.registrarToken(resp["token"])
       this.progressVisible = false;
       this.router.navigate(["/admin/dashboard"]);
    },(error)=>{
      console.log(error);
      this.progressVisible = false;
    });
  }

}
