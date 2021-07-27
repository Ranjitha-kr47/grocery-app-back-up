import { TestBed } from '@angular/core/testing';

import { PurchseFormService } from './purchse-form.service';

describe('PurchseFormService', () => {
  let service: PurchseFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchseFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
