import {Component, signal} from '@angular/core';
import {ButtonComponent} from '../../../shared/components/button/button.component';
import {Journey, JOURNEY_TYPE} from '../../../shared/models';
import journeyList from '../../../shared/journey.json';

@Component({
  selector: 'app-journey-section',
  imports: [ButtonComponent],
  templateUrl: './journey-section.component.html',
  styleUrl: './journey-section.component.scss',
})
export class JourneySectionComponent {
  // CONSTANTS
  readonly JOURNEY_TYPE = JOURNEY_TYPE;

  journeyList = journeyList as Journey[];
  journeyTypeFilter = signal<JOURNEY_TYPE>(JOURNEY_TYPE.EXPERIENCE);

  test = [0, 0, 0];
}
