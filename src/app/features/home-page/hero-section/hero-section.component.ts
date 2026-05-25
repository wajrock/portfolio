import {Component, ElementRef, viewChild} from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {ProjectsSectionComponent} from '../../../shared/components/projects-section/projects-section.component';

@Component({
  selector: 'app-hero-section',
  imports: [HeaderComponent, ButtonComponent, ProjectsSectionComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  projectsSection = viewChild('projectsSection', {read: ElementRef});

  navigateToProjects(): void {
    const projectsSection = this.projectsSection()?.nativeElement as HTMLElement;

    if (!projectsSection) return;

    projectsSection.scrollIntoView({behavior: 'smooth'});
  }
}
