import { TestBed } from '@angular/core/testing';

import { TaxComparatorService } from './tax-comparator.service';

describe('TaxComparatorService', () => {
  let service: TaxComparatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxComparatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
