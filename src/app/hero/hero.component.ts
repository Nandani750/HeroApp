import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  
  heroes:Hero[];
  constructor(private heroService:HeroService) { }

  // getHeroes():void
  // {
  //    this.heroes=this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => this.heroes = data);
  }

  ngOnInit(): void 
  {
     this.getHeroes(); 
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }


   delete(hero:Hero):void
   {
     this.heroes=this.heroes.filter(h => h!==hero);
     this.heroService.deleteHero(hero).subscribe();
   }
   
  // onSelect(hero:Hero)
  // {
  //   this.selectedHero=hero;
  //   this.messageservice.add(`HeroService: Selected hero id=${hero.id}`);
  // }

}
