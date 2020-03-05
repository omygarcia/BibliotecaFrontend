import { Component, OnInit } from '@angular/core';
import {AutorService} from '../autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autores:any = {};
  displayedColumns: string[] = ['nombre','apellidos','email'];

  constructor(autorServ:AutorService) { 
    this.autores = autorServ.obtenerTodosLosAutores();
  }

  ngOnInit(): void {
  }

}
