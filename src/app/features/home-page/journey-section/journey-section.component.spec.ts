import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JourneySectionComponent} from './journey-section.component';

describe('JourneySectionComponent', () => {
  let component: JourneySectionComponent;
  let fixture: ComponentFixture<JourneySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneySectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JourneySectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
