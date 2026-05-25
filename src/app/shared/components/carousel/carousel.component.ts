import {Component, ElementRef, input, signal, viewChild} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {CAROUSEL_SECTION, SCROLL_DIRECTION} from '../../models';

@Component({
  selector: 'app-carousel',
  imports: [ButtonComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  // CONSTANTS
  readonly SCROLL_DIRECTION = SCROLL_DIRECTION;
  readonly CAROUSEL_SECTION = CAROUSEL_SECTION;

  // INPUTS
  carouselItemCount = input.required<number>();
  carouselSection = input.required<CAROUSEL_SECTION>();

  // SIGNALS
  disablePreviousButton = signal<boolean>(true);
  disabledNextButton = signal<boolean>(false);

  // MISC
  carouselScroll = viewChild<ElementRef<HTMLDivElement>>('carouselScroll');

  updateButtonStates(): void {
    const carousel = this.carouselScroll()?.nativeElement;
    if (!carousel) return;

    const {scrollLeft, scrollWidth, clientWidth} = carousel;

    this.disablePreviousButton.set(scrollLeft <= 1);
    this.disabledNextButton.set(Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1);
  }

  // METHODS
  navigateCarousel(direction: SCROLL_DIRECTION): void {
    const carousel = this.carouselScroll()?.nativeElement;
    if (!carousel) return;
    const itemWidth = carousel.scrollWidth / this.carouselItemCount();
    const scrollLeft = carousel.scrollLeft;
    carousel.scrollTo({
      left: direction === SCROLL_DIRECTION.LEFT ? scrollLeft - itemWidth : scrollLeft + itemWidth,
      behavior: 'smooth',
    });
  }
}
