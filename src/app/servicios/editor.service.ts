import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
private ruta = "http://127.0.0.1:8000/api/v1.0/editor/"

  constructor(private http:HttpClient) { }

  obtenerTodosLosEditores():Observable<any>
  {
    return this.http.get(this.ruta);
  }

  agregarEditor(editor:any)
  {
    let json = JSON.stringify(editor);

    let headers = new HttpHeaders().set("Content-type","Application/json");
    
    return this.http.post(this.ruta,json,{headers:headers});
}

  eliminarLibro(id):Observable<any>
  {
    return this.http.delete(this.ruta+id)
  }
}
