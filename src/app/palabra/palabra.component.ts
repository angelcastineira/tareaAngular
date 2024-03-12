import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-palabra',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './palabra.component.html',
  styleUrl: './palabra.component.css'
})
export class PalabraComponent {
  palabraIntroducida = '';
  mostrarTexto = false;

  mostrarPalabra() {
    this.mostrarTexto = true;
  }
}
