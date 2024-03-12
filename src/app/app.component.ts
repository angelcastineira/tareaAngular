import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BodyComponent} from "./body/body.component";
import {PalabraComponent} from "./palabra/palabra.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyComponent, PalabraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';
}
