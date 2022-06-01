import { HEROES } from './constants/mock-heroes';
import { Hero } from './interfaces/hero';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MessagesService } from './messages/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

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
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(
        this.handleError<Hero[]>('getHeroes', [])
      )
    );
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

  /* handleError
     @operation: Nombre de la operación que falló
     @result: Valor opcional para regresar como el resultado del observable */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Por hacer: Mandar el error a la infaestructura de registros
      console.error(error);

      // Por hacer: Hacer un meor trabajo de transformar el error para consumo de usuario
      this.log(`${operation} failed ${error.message}`);

      // La app sigue funcionando regresando un resultado vacío
      return of(result as T);
    }
  }
}
