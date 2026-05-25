import {Component, ElementRef, viewChild} from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {CarouselComponent} from '../../../shared/components/carousel/carousel.component';
import {CAROUSEL_SECTION, Project} from '../../../shared/models';
import projects from './projects.json';
import {ProjectCardComponent} from '../../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-hero-section',
  imports: [HeaderComponent, ButtonComponent, CarouselComponent, ProjectCardComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  // CONSTANTS
  readonly CAROUSEL_SECTION = CAROUSEL_SECTION;

  // MISC
  projectsList: Project[] = projects as Project[];
  projectsSection = viewChild('projectsSection', {read: ElementRef});

  // METHODS
  navigateToProjects(): void {
    const projectsSection = this.projectsSection()?.nativeElement as HTMLElement;

    if (!projectsSection) return;

    projectsSection.scrollIntoView({behavior: 'smooth', block: 'center'});
  }
}
