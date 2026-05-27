import {Component, ElementRef, signal, viewChild} from '@angular/core';
import {SCROLL_DIRECTION, CAROUSEL_SECTION} from '../../../shared/models';
import {ButtonComponent} from '../../../shared/components/button/button.component';

enum REFERENCE_VIEW {
  HARMONIC = 'harmonic',
  LEROYMERLIN = 'leroymerlin',
}
@Component({
  selector: 'app-references-section',
  imports: [ButtonComponent],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.scss',
})
export class ReferencesSectionComponent {
  // CONSTANTS
  readonly SCROLL_DIRECTION = SCROLL_DIRECTION;
  readonly CAROUSEL_SECTION = CAROUSEL_SECTION;
  readonly REFERENCE_VIEW = REFERENCE_VIEW;

  // SIGNALS
  disablePreviousButton = signal<boolean>(true);
  disabledNextButton = signal<boolean>(false);

  activeReference = signal<REFERENCE_VIEW>(REFERENCE_VIEW.HARMONIC);

  // MISC
  referencesCarousel = viewChild<ElementRef<HTMLDivElement>>('referencesCarousel');
}
