import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
})
export class ZapatillasComponent implements OnInit {
  public zapatillas: Array<Zapatilla>;
  public titulo = 'Componente de Zapatillas';
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor() {
    this.miMarca = '';
    this.color = 'yellow';
    this.marcas = new Array();
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 130, true),
      new Zapatilla('Nike MD', 'Nike', 'Negro', 150, true),
      new Zapatilla('Adidas Adizero', 'Adidas', 'Gris', 80, false),
      new Zapatilla('Adidas Adudu', 'Adidas', 'Verde', 120, false),
    ];
  }

  ngOnInit(): void {
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas(): void {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) === -1) {
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }

  addMarcas(marca: string): void {
    this.marcas.push(marca);
    this.miMarca = '';
  }
  borrarMarca(index: number): void {
    this.marcas.splice(index, 1);
  }

  onBlur(): void  {
    console.log('Haz salido del input');
  }
  mostrarPalabra(): void {
    alert(this.miMarca);
  }
}
