import {Component} from '@angular/core';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {ReferencesSectionComponent} from './references-section/references-section.component';
import {StackSectionComponent} from './stack-section/stack-section.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, ReferencesSectionComponent, StackSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
