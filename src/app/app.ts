import { Component } from '@angular/core';
import { CatalogoComponent } from './components/catalogo/catalogo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalogoComponent],
  template: `
    <h1>Bienvenido al Catálogo</h1>
    <app-catalogo></app-catalogo>
  `
})
export class App {}
