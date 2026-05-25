import {Component, ElementRef, signal, viewChild} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {ProjectCardComponent} from './project-card/project-card.component';
import projectsList from './projects.json';
import {SCROLL_DIRECTION, Project} from '../../models';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCardComponent, ButtonComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  readonly SCROLL_DIRECTION = SCROLL_DIRECTION;
  projectsCarousel = viewChild<ElementRef<HTMLDivElement>>('projectsCarousel');
  projects: Project[] = projectsList as Project[];
  disablePreviousButton = signal<boolean>(true);
  disabledNextButton = signal<boolean>(false);

  updateButtonStates(): void {
    const carousel = this.projectsCarousel()?.nativeElement;
    if (!carousel) return;

    const {scrollLeft, scrollWidth, clientWidth} = carousel;

    this.disablePreviousButton.set(scrollLeft <= 1);
    this.disabledNextButton.set(Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1);
  }

  navigateProjects(direction: SCROLL_DIRECTION): void {
    const carousel = this.projectsCarousel()?.nativeElement;
    if (!carousel) return;
    const itemWidth = carousel.scrollWidth / this.projects.length;
    const scrollLeft = carousel.scrollLeft;
    carousel.scrollTo({
      left: direction === SCROLL_DIRECTION.LEFT ? scrollLeft - itemWidth : scrollLeft + itemWidth,
      behavior: 'smooth',
    });
  }
}
