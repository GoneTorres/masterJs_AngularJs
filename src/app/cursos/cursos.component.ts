import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { normalize } from 'path';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  public nombre: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      if (params.nombre === 'ninguno') {
        this.router.navigate(['/home']);
      }
    });
  }
  redirigir(): void {
    this.router.navigate(['/zapatillas']);
  }
}
