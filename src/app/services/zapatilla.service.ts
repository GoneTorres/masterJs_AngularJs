import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.zapatillas = [
      new Zapatilla('Reebok Classic', 'Reebok', 'Blanco', 130, true),
      new Zapatilla('Nike MD', 'Nike', 'Negro', 150, true),
      new Zapatilla('Adidas Adizero', 'Adidas', 'Gris', 80, false),
      new Zapatilla('Adidas Adudu', 'Adidas', 'Verde', 120, false),
    ];
  }

  getTexto(): string {
      return 'Saludos desde el servicio de Zapatilla';
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
