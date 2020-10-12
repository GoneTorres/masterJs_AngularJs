import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService],
})
export class ZapatillasComponent implements OnInit {
  public zapatillas: Array<Zapatilla>;
  public titulo = 'Componente de Zapatillas';
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor(private zapatillaService: ZapatillaService) {
    this.miMarca = '';
    this.color = 'yellow';
    this.marcas = new Array();
  }

  ngOnInit(): void {
    this.zapatillas = this.zapatillaService.getZapatillas();
    alert(this.zapatillaService.getTexto());
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

  onBlur(): void {
    console.log('Haz salido del input');
  }
  mostrarPalabra(): void {
    alert(this.miMarca);
  }
}
