import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReferencesSectionComponent} from './references-section.component';

describe('ReferencesSectionComponent', () => {
  let component: ReferencesSectionComponent;
  let fixture: ComponentFixture<ReferencesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferencesSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
