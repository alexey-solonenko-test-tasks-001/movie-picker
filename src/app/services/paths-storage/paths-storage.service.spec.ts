import { TestBed } from '@angular/core/testing';

import { PathsStorageService } from './paths-storage.service';

describe('PathsStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathsStorageService = TestBed.get(PathsStorageService);
    expect(service).toBeTruthy();
  });
});
