import { MessagesService } from './../messages/messages.service';
import { HeroService } from './../hero.service';
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

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    this.messagesService.add(`Selected hero id=${hero.id}`);
  }

}
