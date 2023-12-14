import { TestBed } from '@angular/core/testing';

import { ComplaintRedressalServiceService } from './complaint-redressal-service.service';

describe('ComplaintRedressalServiceService', () => {
  let service: ComplaintRedressalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplaintRedressalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
