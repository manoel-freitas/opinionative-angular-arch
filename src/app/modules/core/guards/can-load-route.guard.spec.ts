import { TestBed } from '@angular/core/testing';

import { CanLoadRouteGuard } from './can-load-route.guard';

describe('CanLoadRouteGuard', () => {
  let guard: CanLoadRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
