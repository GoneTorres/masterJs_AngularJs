import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService],
})
export class ExternoComponent implements OnInit {
  public user: any;
  public userId: any;
  constructor(private peticionesService: PeticionesService) {}

  ngOnInit(): void {}
  cargaUsuario(): void {
    this.user = false;
    this.peticionesService.getUser(this.userId).subscribe(
      (result) => {
        this.user = result.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
