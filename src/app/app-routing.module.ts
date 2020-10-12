import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'videojuegos', component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'cursos/:nombre/:apellido', component: CursosComponent },
  { path: 'externo', component: ExternoComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
