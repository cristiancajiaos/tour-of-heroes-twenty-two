import { HEROES } from './../constants/mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

}
