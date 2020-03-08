import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private ruta = "http://127.0.0.1:8000/api/v1.0/auth/"

  constructor(private http:HttpClient) { }

  login(usuario)
  {
    let json = JSON.stringify(usuario);

    let cookie = document.cookie;

    let headers = new HttpHeaders();
    headers = headers.append("Content-type","Application/json");
    
    return this.http.post(this.ruta+"login",json,{headers});
  }

  logout()
  {
    let headers = new HttpHeaders().set("Content-type","Application/json");
    return this.http.post(this.ruta+"logout",{},{headers:headers});
  }

  isLogin()
  {
    if(this.obtenerToken())
    {
      return true;
    }

    return false;
  }

  obtenerTodosLosLibros():Observable<any>
  {
    return this.http.get(this.ruta);
  }

  agregarLibro(libro:any)
  {
    let json = JSON.stringify(libro);

    let headers = new HttpHeaders().set("Content-type","Application/json");
    
    return this.http.post(this.ruta,json,{headers:headers});
}

  eliminarLibro(id):Observable<any>
  {
    return this.http.delete(this.ruta+id)
  }

  obtenerToken():string
  {
    let token = window.localStorage.getItem("token");
    return token;
  }

  registrarToken(token)
  {
    window.localStorage.setItem("token",token);
  }

  removerToken()
  {
    window.localStorage.removeItem("token")
  }
}
