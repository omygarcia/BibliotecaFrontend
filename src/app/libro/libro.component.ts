import { Component, OnInit } from '@angular/core';
import {LibroService} from '../libro.service';
import {AutorService} from '../autor.service';
import {EditorService} from '../servicios/editor.service';
import {Libro} from '../interfaces/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libro:Libro = {
    id:1,
    titulo:"El Principito",
    autores:[{id:1,nombre:"aut",apellidos:"ap"}],
    editor:{id:1,nombre:"edit"},
    fecha_publicacion:"",
    portada:null,
  };
  libros:any;
  picker:string;
  autores:any;
  editores:any;

  constructor(private libroServ:LibroService,private autorServ:AutorService,
  private editorServ:EditorService
  ) { 
    this.obtenerLibros();
    this.obtenerAutores();
    this.obtenerEditores();
    console.log(this.libro);
  }

  ngOnInit(): void {
  }

  obtenerLibros()
  {
    this.libroServ.obtenerTodosLosLibros().subscribe(resultado=>{
      this.libros = resultado;
      console.log(resultado);
    },error=>{
      console.log(error);
    });
  }

  obtenerAutores()
  {
    this.autorServ.obtenerTodosLosAutores().subscribe(resultado=>{
      this.autores = resultado;
      console.log(resultado);
    },error=>{
      console.log(error);
    });
  }

  obtenerEditores()
  {
    this.editorServ.obtenerTodosLosEditores().subscribe(resultado=>{
      this.editores = resultado;
      console.log(resultado);
    },error=>{
      console.log(error);
    });
  }

  agregarLibro(e)
  {
    e.stopPropagation();
    this.libroServ.agregarLibro(this.libro).subscribe(result=>{
      this.obtenerLibros();
      console.log(this.libro);
    },error=>{
      console.log(error);
    });
    return false;
  }

  eliminarLibro(identificador)
  {
    this.libroServ.eliminarLibro(identificador).subscribe(result=>{
      this.obtenerLibros();
    },error=>{
      console.log(error);
    });
  }

  subir_imagen(event)
  {
    event.stopPropagation();
    return false;
  }

  seleccionarLibro(event,libro:any)
  {
    event.stopPropagation();
    this.libro = libro;
    console.log(this.libro);
    return false;
  }

}
