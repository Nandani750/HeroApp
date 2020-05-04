import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  heroes=HEROES;

  constructor() { }

  ngOnInit(): void 
  {
    
  }

  selectedHero:Hero;
  onSelect(hero:Hero)
  {
    this.selectedHero=hero;
  }

}
