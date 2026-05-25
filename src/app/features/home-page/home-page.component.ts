import {Component} from '@angular/core';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {ReferencesSectionComponent} from './references-section/references-section.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, ReferencesSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
