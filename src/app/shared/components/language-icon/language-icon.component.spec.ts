import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageIconComponent} from './language-icon.component';

describe('LanguageIconComponent', () => {
  let component: LanguageIconComponent;
  let fixture: ComponentFixture<LanguageIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageIconComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
