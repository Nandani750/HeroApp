import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';
import { Observable, of, pipe } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HeroService 
{

    private heroesUrl='api/heroes';
    constructor(private messageservice:MessageService,private http:HttpClient) { }

    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          tap(_=> this.log('feteched heroes')),
          catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
       console.error(error); 
        this.log(`${operation} failed: ${error.message}`);
         return of(result as T);
      };
    }

    getHero(id: number): Observable<Hero> {
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get<Hero>(url).pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
    }

    getHeroNo404<Data>(id: number): Observable<Hero> {
      const url = `${this.heroesUrl}/?id=${id}`;
      return this.http.get<Hero[]>(url)
        .pipe(
          map(heroes => heroes[0]), 
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} hero id=${id}`);
          }),
          catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }
  
    updateHero(hero:Hero):Observable<any>
    {
        return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(
          tap(_ =>this.log(`updated hero id=${hero.id}`)),
          catchError(this.handleError<any>('updateHero'))
        );
    }

    httpOptions=
    {
        headers:new HttpHeaders({'Content-Type':'application/json'})
    };

    addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
    }

    deleteHero(hero:Hero |number):Observable<Hero>
    {
      const id=typeof hero ==='number' ? hero : hero.id;
      const url=`${this.heroesUrl}/${id}`;
      return this.http.delete<Hero>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        );
        catchError(this.handleError<Hero>('deleteHero'))
    }
    
    searchHeroes(term: string): Observable<Hero[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
        tap(x => x.length ?
           this.log(`found heroes matching "${term}"`) :
           this.log(`no heroes matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      );
    }
    
    private log(message: string) {
      this.messageservice.add(`HeroService: ${message}`);
    }
}

