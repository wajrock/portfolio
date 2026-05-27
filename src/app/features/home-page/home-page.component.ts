import {Component} from '@angular/core';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {ReferencesSectionComponent} from './references-section/references-section.component';
import {StackSectionComponent} from './stack-section/stack-section.component';
import {ContactSectionComponent} from './contact-section/contact-section.component';
import {JourneySectionComponent} from './journey-section/journey-section.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent,
    ReferencesSectionComponent,
    StackSectionComponent,
    ContactSectionComponent,
    JourneySectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
