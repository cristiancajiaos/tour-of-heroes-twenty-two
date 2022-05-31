import { HEROES } from './constants/mock-heroes';
import { Hero } from './interfaces/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
