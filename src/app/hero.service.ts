import { HEROES } from './constants/mock-heroes';
import { Hero } from './interfaces/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messagesService: MessagesService
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add('HeroService: Fetched heroes')
    return heroes;
  }
}
