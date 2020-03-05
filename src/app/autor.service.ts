import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private ruta = "http://127.0.0.1:8000/api/v1.0/autor/"

  constructor(private http:HttpClient) { }

  obtenerTodosLosAutores():Observable<any>
  {
    return this.http.get(this.ruta);
  }

  agregarAutor(libro:any)
  {
    let json = JSON.stringify(libro);

    let headers = new HttpHeaders().set("Content-type","Application/json");
    
    return this.http.post(this.ruta,json,{headers:headers});
  }

  eliminarAutor(id):Observable<any>
  {
    return this.http.delete(this.ruta+id)
  }
}
