import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LibroComponent} from './libro/libro.component';
import {AutorComponent} from './autor/autor.component';
import {EditorComponent} from './editor/editor.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin/dashboard",component:DashboardComponent},
  {path:"admin/libro",component:LibroComponent},
  {path:"admin/autor",component:AutorComponent},
  {path:"admin/editor",component:EditorComponent},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
