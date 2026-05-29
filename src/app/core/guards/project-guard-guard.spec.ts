import {TestBed} from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';

import {projectGuardGuard} from './project-guard-guard';

describe('projectGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => projectGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
