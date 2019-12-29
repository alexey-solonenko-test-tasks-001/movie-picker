import { TestBed } from '@angular/core/testing';

import { LiveSearchService } from './live-search.service';

describe('LiveSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveSearchService = TestBed.get(LiveSearchService);
    expect(service).toBeTruthy();
  });
});
