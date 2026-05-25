import {Component, ElementRef, signal, viewChild} from '@angular/core';
import {SCROLL_DIRECTION, CAROUSEL_SECTION} from '../../../shared/models';
import {CarouselComponent} from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-references-section',
  imports: [CarouselComponent],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.scss',
})
export class ReferencesSectionComponent {
  // CONSTANTS
  readonly SCROLL_DIRECTION = SCROLL_DIRECTION;
  readonly CAROUSEL_SECTION = CAROUSEL_SECTION;

  // SIGNALS
  disablePreviousButton = signal<boolean>(true);
  disabledNextButton = signal<boolean>(false);

  // MISC
  referencesCarousel = viewChild<ElementRef<HTMLDivElement>>('referencesCarousel');
}
