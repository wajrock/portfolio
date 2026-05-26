import {Component} from '@angular/core';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {ReferencesSectionComponent} from './references-section/references-section.component';
import {StackSectionComponent} from './stack-section/stack-section.component';
import {ContactSectionComponent} from './contact-section/contact-section.component';
import {AboutSectionComponent} from './about-section/about-section.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent,
    ReferencesSectionComponent,
    StackSectionComponent,
    ContactSectionComponent,
    AboutSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
