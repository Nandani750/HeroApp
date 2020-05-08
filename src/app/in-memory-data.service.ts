import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const heroes = [
        
        {id:101,name:'salman'},
        {id:102,name:'Akshay'},
        {id:103,name:'Ranveer'},
        {id:104,name:'Hrithik'},
        {id:105,name:'Shahid'},
        {id:108,name:'Varun'},
        {id:109,name:'Tiger'},
        {id:110,name:'Kartik'},
       
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number
  {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}