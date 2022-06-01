import { HEROES } from './constants/mock-heroes';
import { Hero } from './interfaces/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.log(`Fetched heroes`);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    // Por ahora, se asume un ´heroe con una ID especificada existe
    const hero = HEROES.find(h => h.id === id)!;
    this.log(`fetched hero id=${id}`);
    return of(hero);
  }

  private log(message: string) {
    this.messagesService.add(`HeroService: ${message}`);
  }
}
