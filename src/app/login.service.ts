import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private ruta = "http://127.0.0.1:8000/api/v1.0/obtenerToken/"

  constructor(private http:HttpClient) { }

  login(usuario)
  {
    let json = JSON.stringify(usuario);

    let headers = new HttpHeaders().set("Content-type","Application/json");
    
    return this.http.post(this.ruta,json,{headers:headers});
  }

  logout()
  {

  }

  isLogin()
  {
    return true;
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
}
