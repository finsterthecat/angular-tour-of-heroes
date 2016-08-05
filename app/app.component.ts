import { Component }       from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ],
  precompile: [DashboardComponent, HeroesComponent, HeroDetailComponent]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
