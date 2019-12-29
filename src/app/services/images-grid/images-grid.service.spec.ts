import { TestBed } from '@angular/core/testing';

import { ImagesGridService } from './images-grid.service';

describe('ImagesGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesGridService = TestBed.get(ImagesGridService);
    expect(service).toBeTruthy();
  });
});
