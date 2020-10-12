import { Component } from '@angular/core';
import { Configuration } from './models/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string;
  public descripcion: string;
  public mostrarVideojuegos = true;

  constructor() {
    this.title = Configuration.titulo;
    this.descripcion = Configuration.descripcion;
  }

  ocultarVideojuegos(value): void {
    this.mostrarVideojuegos = value;
  }
}
