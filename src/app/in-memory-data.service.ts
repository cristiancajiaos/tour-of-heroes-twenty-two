import { Hero } from './interfaces/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];

    return { heroes };
  }

  /* Se sobreescribe el método genId para asegurarse de que
     un héroe siempre tenga una ID.
     Si el arreglo de héroes está vacío, el método de abajo
     regresa el número inicial (11).
     Si el arreglo de héroes no esta vacío, el método de abajo
     regresa el ID del héroe más alto más 1 */
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
