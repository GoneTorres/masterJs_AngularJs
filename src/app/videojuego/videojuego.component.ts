import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;

  constructor() {
    this.titulo = 'Componente de Videojuegos';
    this.listado = 'Listado de los juegos más populares';
  }

  ngOnInit(): void {}

  ngDoCheck(): void {}
  cambiarTitulo(): void {
    this.titulo = 'Nuevo título del componente';
  }
  ngOnDestroy(): void {}
}
