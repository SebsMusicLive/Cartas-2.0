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
  cantidad: number = 0;
  sumarCarta1(){
    this.cantidad++;
  }

  sumarCarta2(){
    
  }

  sumarCarta3(){
  
  }
  sumarCarta4(){
    
  }
  sumarCarta5(){
    
  }
  sumarCarta6(){
    
  }
  sumarCarta7(){
    
  }
  sumarCarta8(){
    
  }
  sumarCarta9(){
    
  }
  sumarCarta10(){
    
  }
  sumarCarta11(){
    
  }
  sumarCarta12(){
    
  }

  sumarCarta13(){
    
  }
}
