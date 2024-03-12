  import { Component } from '@angular/core';

  @Component({
    selector: 'app-body',
    standalone: true,
    imports: [],
    templateUrl: './body.component.html',
    styleUrl: './body.component.css'
  })
  export class BodyComponent {
    tituloContador = "Contador"

    contador = 0; // Propiedad para el contador

    // Método para incrementar el contador
    incrementarContador() {
      this.contador++;
    }

    // Método para restablecer el contador
    resetContador() {
      this.contador = 0;

  }
  }
