import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-cartas',
  standalone: true,
  imports: [],
  templateUrl: './listar-cartas.component.html',
  styleUrl: './listar-cartas.component.css'
})
export class ListarCartasComponent {
   cargarCartas(){
    let table = document.querySelector('#cartas');
    let html = '';

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'assets/data.json', true);
    xhttp.send();
    xhttp.onreadystatechange= function() {
      if(this.readyState == 4 && this.status == 200) {
        let cards = JSON.parse(this.responseText);
        
        for (let i = 0; i < cards.length; i++) {
          html += `<tr>
                   <td>${cards[i].numero}</td>
                   <td>${cards[i].carta}</td>
                   <td>${cards[i].cantidad}</td>
                   </tr>`;
        }

        table!.innerHTML = html;
      }
    }
  }


  constructor() {}

  ngOnInit(){
    this.cargarCartas();
  }
}

