import {Component} from '@angular/core';
import {HeroSectionComponent} from './hero-section/hero-section.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
