import { Component } from '@angular/core';
import { ListarCartasComponent } from "../listar-cartas/listar-cartas.component";
import { AdicionarElementoComponent } from "../adicionar-elemento/adicionar-elemento.component";

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [ListarCartasComponent, AdicionarElementoComponent],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  
}
