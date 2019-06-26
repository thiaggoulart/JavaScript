import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/Hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero;
  heroes:Hero[];
  constructor( private servico:HeroService) { }

  ngOnInit() {
    this.hero = {id:1, name:"Super TS"};
    this.heroes = this.servico.getHeroes();
  }

}
