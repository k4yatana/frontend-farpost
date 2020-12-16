import { TestBed } from '@angular/core/testing';

import { LongestService } from './longest.service';

describe('LongestService', () => {
  let service: LongestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
