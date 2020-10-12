import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public identificado: boolean;
  constructor() {
  }

  ngOnInit(): void {}
  setIdentificado(): void{
    this.identificado = true;
  }
  salir(): void{
    this.identificado = false;
  }
}
