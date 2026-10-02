import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimerComponente } from './components/primer-componente/primer-componente';
import { SegundoComponente } from './components/segundo-componente/segundo-componente';
import { TercerComponente } from './components/tercer-componente/tercer-componente';
import { CuartoComponente } from './components/cuarto-componente/cuarto-componente';

@Component({
  imports: [RouterOutlet, PrimerComponente,SegundoComponente, TercerComponente, CuartoComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app_uno');
}
